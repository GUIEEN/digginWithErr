# Modules: ES2015 vs CommonJS

https://www.youtube.com/watch?v=8O_H2JgV7EQ

---

## Ref

- import statement vs require statement :: https://insights.untapt.com/webpack-import-require-and-you-3fd7f5ea93c0

---

## ES2015 includes module definitions

- Long anticipated
- But modules have been around in Node for several years (CommonJS)
- How are ES modules different ?
- And why does Node have difficulty importing CommonJS modules ?

## Quick overview: CommonJS

```js
// CommonJS
// a.js
module.exports = {
  foo: 4,
  bar: 7,
  blahblah: 12
}

// b.js
var a = require('./a)
console.log(a.bar) // 7
```

- module.exports is a POJSO, can be anything and changed anytime
- require is just another regular function
- require result is the exported POJSO
- At the end of the day, a library

## Quick overview: Modules

```js
// Modules
// a.js
export const number = 4;
export default 7;

// b.js
import florg, { number } from './a.js
console.log(florg + number) // 11
```

- export and import are resolved at module parse time
- export exposes variable bindings
- import receives variable bindings
- Have one (optional) default export
- Note: Syntax is not object destructuring!
- Since it's a part of the language itself(not a library like commonJS), it can use dirty magic tricks

## In one word:

### Static (ES2015) vs Dynamic (CommonJS)

## When can we import/export ?

Parse time (ES) vs Runtime (CommonJS)

- import/export must be top-level ::
  - not inside statement or function
  - JavaScript engine tries to parse your js files.
    - 'Hey that's a module !'
    - it has to know which what it is imported and exported at **parse time**.

```js
// valid
import foo from 'foo'

// Invalid !!
if (false) {
  import bar from 'bar'
}

// Invalid !!
setTimeout(function() {
  export let quz = 14
})
```

- require/module.exports can be anywhere:
  - module is an object

```js
// valid
if (Math.random() > 0.1) {
  exports.foobar = 7
} else {
  require('rimraf')('/')
}
```

## TOC/TOU

Time of check, time of use (https://en.wikipedia.org/wiki/Time_of_check_to_time_of_use)

Where can we use imported variables ?

- imported bindings are determined at parse time and hoisted:
  - import behaves like functions or var where the variable is hoisted to the top of the block

```js
// valid
console.log('this is ok', foo)
import foo from 'foo'
```

- require is just another function call, so assignment behaves as usual:

```js
// throws an error
console.log('oh no an error', foo) // ReferenceError
const foo = require('./foo')
```

## Where can we import from ?

String literal (ES) vs any expression (CommonJS)

- The RHS of **import** must be string literal:

```js
// valid
import foo from 'foo'

// invalid
import foo from 'f' + 'oo'
import foo from `template-string` // NOTE :: TAMPLATE STRING IS ALSO INVALID !!
import foo from 6
import foo from {}
```

cf) RHS / LHS :: Right hand side and left hand side.

- Since **require** is a regular function, we can pass anything we want:

```js
require(hasTheLargeHadronColliderDestroyedTheWorldYet
  ? 'left-pad'
  : Math.random() + Date.now() / 2 + 7 + '.js')
```

## What do we import/export ?

Variable binding (ES) vs POJSO (CommonJS)

- import receives a variable binding, export exposes one:

```js
// foo.js
export let foo = 4
export function incFoo() {
  foo += 1
}

// main.js
import { foo, incFoo } from './foo.js'
console.log(foo) // 4
incFoo()
console.log(foo) // 5

// same variable binding so they change it both
```

- With CommonJS it's.... complicated.
  - Since an object is exported changing the object works as expected.

```js
// wut.js
var foo = 4
module.exports = { foo, bar: 7, incFoo, incBar }
function incFoo() {
  foo += 1
}
function incBar() {
  module.exports.bar += 1
}

// main.js
var wut = require('./wut')
console.log(wut.foo, wut.bar) // 4, 7
incFoo()
incBar()
console.log(wut.foo, wut.bar) // 4, 8
```

## In Summary

- CommonJS and ES modules accomplish similar things, but have differing philosophies
- CommonJS is dynamic, ES is static
- ES modules expose variable bindings, CommonJS modules expose objects

## Forward-exports are weird

```js
// What if there are duplicate names ?
export let foo = 4
export * from 'exports-foo'

// What if multiple modules declare the same identifier?

// mid.js
export * from 'exports-foo'
export * from 'also-exports-foo'
```

**The Answer** is It Depends: How are you importing ?

```js
import { foo } from './mid.js' // SyntaxError
import * as mid from './mid.js' // no error
console.log(mid.foo) // undefined
```

## Random module goodies

```js
// Imported bindings are const (read-only)
import foo from './foo.js'
foo = 4 // TypeError: Assignment to constant variable.
```

```js
// You can forward the exports of another module
export * from 'foo'
// Maybe more on that later
```

```js
// Proposal: dynamic imports https://github.com/tc39/proposal-dynamic-import
// Implements an `import` function
import(asdfqwerqwerqwerqwerasdfasdf
  ? 'OKOKOKOK'
  : (Math.random() * Date.now()) / 2 + 7 + '.js').then(module => {
  // win
})
```

```js
// Proposal: Loaders https://github.com/whatwg/loader
// Allows customizing the import process on several levels
// (all sorts of urls, transpiling on-the-fly, ...)
// Nothing conrete yet
```
