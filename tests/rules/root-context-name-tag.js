var rule = require('../../lib/rules/root-context-name-tag');
var RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  ecmaFeatures: {
    modules: true
  }
});

var ruleTester = new RuleTester();
ruleTester.run('root-context-name-tag', rule, {
  valid: [{
    code: [
      'var tag = this;',
      'function test () {',
      ' var me = this',
      '}'
    ].join('\n')
  }, {
    code: [
      'var tag = this;',
      'var me = tag;',
      'function test () {',
      ' var me = this',
      '}'
    ].join('\n')
  }],

  invalid: [
    {
      code: 'var self = this;',
      errors: [{
        message: 'Root scope identifier should be named as tag',
        type: ''
      }]
    },
    {
      code: [
        'var tag = this;',
        'function rename() {',
        ' var self = this;',
        '}',
        'var _this = this;'
      ].join('\n'),
      errors: [{
        message: 'Root scope identifier should be named as tag',
        type: ''
      }]
    },
    {
      code: [
        'function tag() {',
        ' var self = this;',
        '}',
        'var _this = this;'
      ].join('\n'),
      errors: [{
        message: 'Root scope identifier should be named as tag',
        type: ''
      }]
    }
  ]
});
