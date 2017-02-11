### eslint-plugin-peopleai

In general, customized `riot's` `tag` files linter with a couple of custom rules.

[![Build Status](https://img.shields.io/travis/behind-the-moon/eslint-plugin-peopleai.svg?style=flat-square)](https://travis-ci.org/behind-the-moon/eslint-plugin-peopleai.svg) [![npm version](https://img.shields.io/npm/v/eslint-plugin-peopleai.svg?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-peopleai) [![license](https://img.shields.io/github/license/behind-the-moon/eslint-plugin-peopleai.svg?style=flat-square)]() 

### Installation

```
  npm install eslint-plugin-peopleai
```

### Usage

Inside of your .eslintrc

```
{
  "plugins": [ "peopleai" ],
  "rules" : {
    "peopleai/root-context-name-tag" : 2
  }
}
```

### Rules

  * `root-context-name-tag` - name of the root context assignment should be `tag` ( var tag = this; )

```
  Root scope identifier should be named as tag (peopleai/root-context-name-tag)
```


#### With support of

  * html general checks
  * no text inside of a tag
  * plugins nesting


[![Screenshot](https://raw.githubusercontent.com/behind-the-moon/eslint-plugin-peopleai/master/contrib/tags-lint.png)]()

### License

MIT (c) Svetlana Linuxenko
