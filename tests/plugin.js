var expect = require('chai').expect;
var path = require('path');
var CLIEngine = require("eslint").CLIEngine;
var plugin = require('..');

function execute(file, baseConfig) {
  if (!baseConfig) baseConfig = {};

  var cli = new CLIEngine({
    extensions: ["tag"],
    baseConfig: {
      settings: baseConfig.settings,
      rules: Object.assign({
        'no-console': 2,
      }, baseConfig.rules),
    },
    ignore: false,
    useEslintrc: false,
  });
  cli.addPlugin('tag', plugin);
  var results = cli.executeOnFiles([path.join(__dirname, 'fixtures', file)]).results;
  return results[0] && results[0].messages;
}


describe('Test tags plugin', function () {
  it('should pass successful test', function () {
    var messages = execute('successfull.tag');
    expect(messages).to.be.an('undefined');
  });

  it('should fall on text inside of tag', function () {
    var messages = execute('textintag.tag');

    expect(messages.length).to.be.equal(2);
    expect(messages[0].line).to.be.equal(7);
    expect(messages[1].line).to.be.equal(9);
  });
});
