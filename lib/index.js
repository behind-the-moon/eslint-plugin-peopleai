var extract = require('./extract');

var blockInfo;
var code;

function lineOf(text, substring){
  var line = 0, matchedChars = 0;

  for (var i = 0; i < text.length; i++) {
    text[i] === substring[matchedChars] ? matchedChars++ : matchedChars = 0;

    if (matchedChars === substring.length){
        return line;
    }
    if (text[i] === '\n'){
        line++;
    }
  }

  return  -1;
}

var tagProcessor = {
  preprocess: function (content) {
    code = content;
    blockInfo = extract(code);
    return [blockInfo.code, blockInfo.tagText];
  },
  postprocess: function (messages, filename) {
    var isTextInside = blockInfo.tagText.replace(/\s|(\{.*\})/gi,'').length > 0;
    messages[0].forEach(function(message) {
      message.column += blockInfo.indent
      message.line += (blockInfo.line - 1)
    });

    if (isTextInside) {
      var txt = blockInfo.tagText.replace(/\{.*\}/gi, '')
        .split('\n')
        .filter(function (t) {
          return t.match(/\S+/)
        });

      for (var i = 0; i < txt.length; i++) {
        messages[0].push({
          ruleId: null,
          fatal: true,
          severity: 2,
          source: '',
          message: 'Plain text inside of a tag',
          line: lineOf(code, txt[i]) + 1,
          column: 0
        });
      }
    }
    return messages[0]
  }
};

module.exports.processors = {
  '.tag' : tagProcessor
};

