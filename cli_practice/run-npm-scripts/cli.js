#!/usr/bin/env node

// Grap provided args.
const [,, ...args] = process.argv
console.log(process.argv)

// Print hello world provided args.
console.log(`Hello World ${args}`)
