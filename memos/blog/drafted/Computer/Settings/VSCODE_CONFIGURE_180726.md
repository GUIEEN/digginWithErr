# Configuration of my VS_CODE & Development tools!

1. eslint
Not using prettier plugin/extension on vscode ! because if you have both eslint & prettier than this both will try to fix our code !
No Prettier plugin, Yes eslint Plugin !
just setup via `.eslintrc` by `eslint --init`
globally & extension is needed


2. terminal
hyper terminal
oh my zsh + agnoster theme(with powerline font)
https://medium.freecodecamp.org/jazz-up-your-zsh-terminal-in-seven-steps-a-visual-guide-e81a8fd59a38

3. theme
pop
primal
one dark pro

4. extensions
    1. sublime keymap -> command + Dで選択したりなど
    2. Node.js Extension Pack

        VS Code comes with a ton of features for Node.js development out of the box. This extension pack adds more!

        These are some of my favorite extensions to make Node.js development easier and fun.

        Extensions Included

        ES Lint - Integrates ESLint into VS Code.
        npm - Run npm scripts from the command palatte and validate the installed modules defined in package.json.
        JavaScript (ES6) Snippets - Adds code snippets for JavaScript development in ES6 syntax.
        Search node_modules - Quickly search for node modules in your project.
        NPM IntelliSense - Adds IntelliSense for npm modules in your code.
        Path IntelliSense - Autocompletes filenames in your code.

    3. tslint

    4. Color highlight
    5. VS Color Picker

    6. Git Extension Pack
    7. markdown all in one
    8. Paste Image
    9. Bracket Pair Colorizer
    10. Indenticator

---

## When using typescript

`yarn add -D tslint tslint-config-standard`

`tslint --init` or `touch tslint.json`
```json
// tslint.json
{
    "extends": "tslint-config-standard"
}
```

