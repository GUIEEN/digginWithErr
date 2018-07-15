# ESLint

---

## REF

Official ::
https://eslint.org/docs/user-guide/configuring

---

## Why ESLint

link: https://www.youtube.com/watch?v=hppJw2REb8g

- JavaScript Linter
- Analyzes your JS
- Finds problems in your code
- Similar to JSLint, JSHint

```js
function multiple(a, b) {
  return a * c
}
```

```bash
# on Terminal
> eslint
error "b" is defined but never used no-unused-vars
error "c" is not defined   no-undef
```

## Code Quality Checking

Automatically

- Finds errors
- Enforces rules
- Fixes errors

## ESLint Install

`npm i --save-dev eslint`

```bash
[guieenoutis@Guieenoutiss-MacBook-Pro] ~/Documents/myWorks/digginWithErr (master) ⚡
❯ ls node_modules/eslint
CHANGELOG.md LICENSE      README.md    bin          conf         lib          messages     package.json

[guieenoutis@Guieenoutiss-MacBook-Pro] ~/Documents/myWorks/digginWithErr (master) ⚡
❯ ls -al node_modules/.bin
total 0
drwxr-xr-x   11 guieenoutis  staff   352 Jul 14 18:25 .
drwxr-xr-x  143 guieenoutis  staff  4576 Jul 14 18:25 ..
lrwxr-xr-x    1 guieenoutis  staff    18 Jul 14 18:25 acorn -> ../acorn/bin/acorn
lrwxr-xr-x    1 guieenoutis  staff    23 Jul 14 18:25 eslint -> ../eslint/bin/eslint.js
lrwxr-xr-x    1 guieenoutis  staff    25 Jul 14 18:25 esparse -> ../esprima/bin/esparse.js
lrwxr-xr-x    1 guieenoutis  staff    28 Jul 14 18:25 esvalidate -> ../esprima/bin/esvalidate.js
lrwxr-xr-x    1 guieenoutis  staff    25 Jul 14 18:25 js-yaml -> ../js-yaml/bin/js-yaml.js
lrwxr-xr-x    1 guieenoutis  staff    20 Jul 14 18:25 mkdirp -> ../mkdirp/bin/cmd.js
lrwxr-xr-x    1 guieenoutis  staff    16 Jul 14 18:25 rimraf -> ../rimraf/bin.js
lrwxr-xr-x    1 guieenoutis  staff    20 Jul 14 18:25 semver -> ../semver/bin/semver
lrwxr-xr-x    1 guieenoutis  staff    18 Jul 14 18:25 which -> ../which/bin/which
```

As you can see on above result, any modules locally installed by npm is executable.
eg) `eslint -> ../eslint/bin/eslint.js`
eg) `./node_modules/.bin/eslint public/js/vanilla`

You can setting the eslint via following command.

```c
❯ ./node_modules/.bin/eslint --init
```

- But before running this command, **you need a package.json file**. Run 'npm init' to create one.
- CommonJS - require statement
- JSX - if you're using 'React.js'

then, `.eslintrc.json` is created.

```json
{
  env: {
    browser: true // which indicate this is for a client-side code
  },
  extends: eslint:recommended,
  rules: {
    indent: [
      error, 4
    ],
    linebreak-style: [
      error,
      unix
    ],
    quotes: [
      error,
      single
    ],
    semi: [
      error,
      always
    ]
  }
}
```

---
