# @sensed/prettier-config

Shared Prettier configuration for all Sensed projects.

## Installation

```bash
npm install --save-dev @sensed/prettier-config prettier
```

or

```bash
yarn add --dev @sensed/prettier-config prettier
```

## Usage

### Method 1: package.json (Recommended)

Add this to your `package.json`:

```json
{
  "prettier": "@sensed/prettier-config"
}
```

### Method 2: .prettierrc.js

Create a `.prettierrc.js` file in your project root:

```javascript
module.exports = require('@sensed/prettier-config');
```

### Method 3: Extending the config

If you need to override some settings:

```javascript
// .prettierrc.js
const sensedConfig = require('@sensed/prettier-config');

module.exports = {
  ...sensedConfig,
  // Your overrides
  printWidth: 100,
  semi: false,
};
```

## Configuration Details

This config includes the following settings:

- **Print Width**: 80 characters
- **Tab Width**: 2 spaces
- **Tabs**: Uses spaces, not tabs
- **Semicolons**: Always add semicolons
- **Quotes**: Single quotes for JS/TS, single quotes for JSX
- **Trailing Commas**: ES5 compatible (objects, arrays)
- **Bracket Spacing**: Add spaces inside object brackets
- **Arrow Parens**: Avoid parentheses when possible
- **End of Line**: LF (Unix-style line endings)

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## IDE Integration

### VS Code

Install the Prettier extension and add this to your workspace settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

### WebStorm/IntelliJ

1. Go to Settings → Languages & Frameworks → JavaScript → Prettier
2. Set Prettier package path to `node_modules/prettier`
3. Enable "On save" and "On 'Reformat Code' action"

## Contributing

If you need to modify the Prettier configuration:

1. Update the `.prettierrc.json` file
2. Test the changes on sample projects
3. Update the version in `package.json`
4. Create a pull request

## License

MIT
