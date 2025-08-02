# ✨ @sensed/prettier

> 🎯 **The Ultimate Prettier Configuration** - Consistent, beautiful code formatting across all Sensed projects!

[![npm version](https://badge.fury.io/js/@sensed%2Fprettier.svg)](https://www.npmjs.com/package/@sensed/prettier)
[![Downloads](https://img.shields.io/npm/dm/@sensed/prettier.svg)](https://www.npmjs.com/package/@sensed/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Why Choose @sensed/prettier?

- 🎨 **Beautiful Code**: Transform messy code into art
- ⚡ **Zero Config**: Works out of the box with sensible defaults
- 🔧 **Extensible**: Easy to customize for your specific needs
- 🌍 **Universal**: Supports JS, TS, HTML, CSS, JSON, Markdown, XML & more
- 🎯 **Team-Ready**: Keep your entire team's code consistent
- 📦 **Lightweight**: Just 4.9KB - won't bloat your project

## 📦 Installation

```bash
# npm
npm install --save-dev @sensed/prettier prettier

# yarn
yarn add --dev @sensed/prettier prettier

# pnpm
pnpm add -D @sensed/prettier prettier
```

## 🎯 Quick Start

### Method 1: 📄 package.json (Recommended)

Add this magic line to your `package.json`:

```json
{
    "prettier": "@sensed/prettier"
}
```

### Method 2: ⚙️ .prettierrc.js

Create a `.prettierrc.js` file:

```javascript
module.exports = require('@sensed/prettier');
```

### Method 3: 🔧 Custom Configuration

Need to tweak something? No problem!

```javascript
// .prettierrc.js
const sensedConfig = require('@sensed/prettier');

module.exports = {
    ...sensedConfig,
    // Your awesome overrides ✨
    printWidth: 100,
    semi: false,
};
```

## 🎨 What Makes This Config Special?

| Feature                | Value                    | Why It's Awesome                                    |
| ---------------------- | ------------------------ | --------------------------------------------------- |
| 📏 **Print Width**     | 120 chars (90 for JS/TS) | Perfect balance of readability & screen real estate |
| 🔤 **Indentation**     | 4 spaces                 | Clean, consistent visual hierarchy                  |
| 💬 **Quotes**          | Single quotes            | Cleaner, more modern look                           |
| 🔚 **Semicolons**      | Always                   | No surprises, crystal clear statements              |
| 📝 **Trailing Commas** | All                      | Git-friendly diffs, easier refactoring              |
| 🎯 **Arrow Parens**    | Always                   | Consistent function syntax                          |
| 📄 **Line Endings**    | LF                       | Cross-platform compatibility                        |

## 🔥 Advanced Features

### 🎭 File-Specific Formatting

- **HTML**: 120 chars, single attributes per line
- **JavaScript/TypeScript**: 90 chars, optimized for readability
- **JSON**: Auto-sorted package.json files
- **Markdown**: Prose wrapping for perfect documentation
- **XML/SVG**: Specialized formatting with dedicated plugins

### 🧩 Included Plugins

- `@prettier/plugin-xml` - Beautiful XML/SVG formatting
- `prettier-package-json` - Smart package.json sorting
- `prettier-plugin-organize-attributes` - HTML attribute organization
- `sort-package-json` - Consistent package.json structure

## ⚡ Supercharge Your Workflow

Add these power-user scripts to your `package.json`:

```json
{
    "scripts": {
        "format": "prettier --write . 💨",
        "format:check": "prettier --check . 🔍",
        "format:watch": "prettier --write . --watch 👀"
    }
}
```

## 🛠️ IDE Integration

### 💙 VS Code

Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add
this to your settings:

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "editor.rulers": [120]
}
```

### 🧠 WebStorm/IntelliJ

1. 📁 Go to Settings → Languages & Frameworks → JavaScript → Prettier
2. 📦 Set Prettier package path to `node_modules/prettier`
3. ✅ Enable "On save" and "On 'Reformat Code' action"
4. 🎉 Enjoy automatic formatting!

## 🌟 Before & After

**Before** 😭

```javascript
const messyObject = {
    name: 'John',
    age: 30,
    hobbies: ['coding', 'reading'],
    address: {street: '123 Main St', city: 'Anytown'},
};
```

**After** ✨

```javascript
const beautifulObject = {
    name: 'John',
    age: 30,
    hobbies: ['coding', 'reading'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
    },
};
```

## 🤝 Contributing

Want to make this config even more awesome?

1. 🍴 Fork the repo
2. 🔧 Make your improvements
3. ✅ Test with `npm test`
4. 📝 Update the docs
5. 🚀 Submit a PR

## 📊 Project Stats

- 🔥 **Active Development**: Regular updates & improvements
- 🌍 **Production Ready**: Used across multiple projects
- 📈 **Growing Community**: Join the formatting revolution!
- ⚡ **Lightning Fast**: Formats your entire codebase in seconds

## 🎉 Ready to Transform Your Code?

```bash
npm install --save-dev @sensed/prettier prettier
echo '{"prettier": "@sensed/prettier"}' >> package.json
npx prettier --write .
```

**Boom!** 💥 Your code is now beautiful!

---

## 📄 License

MIT © [Aly Nasser](https://github.com/ng-alynasser)

**Made with ❤️ for developers who care about beautiful code**
