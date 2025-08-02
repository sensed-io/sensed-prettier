# Prettier Configuration Documentation

## Overview

This document provides comprehensive documentation for the `@sensed/prettier` configuration package. This configuration
provides sophisticated code formatting with file-specific overrides and advanced attribute organization.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Global Configuration Options](#global-configuration-options)
- [Attribute Organization](#attribute-organization)
- [File-Specific Overrides](#file-specific-overrides)
- [Plugins](#plugins)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

## Installation

```bash
npm install --save-dev @sensed/prettier prettier
```

## Usage

### In package.json

```json
{
    "prettier": "@sensed/prettier"
}
```

### With CLI

```bash
# Format all files
prettier --write .

# Check formatting
prettier --check .
```

### In Scripts

```json
{
    "scripts": {
        "format": "prettier --write .",
        "format:check": "prettier --check ."
    }
}
```

## Global Configuration Options

### Basic Formatting

| Option          | Value   | Description                                     |
| --------------- | ------- | ----------------------------------------------- |
| `printWidth`    | `120`   | Maximum line length before wrapping             |
| `tabWidth`      | `4`     | Number of spaces per indentation level          |
| `useTabs`       | `false` | Use spaces instead of tabs                      |
| `semi`          | `true`  | Always add semicolons                           |
| `singleQuote`   | `true`  | Use single quotes (except when escaping needed) |
| `trailingComma` | `'all'` | Add trailing commas wherever valid              |

### Advanced Formatting

| Option                       | Value         | Description                                          |
| ---------------------------- | ------------- | ---------------------------------------------------- |
| `arrowParens`                | `'always'`    | Always wrap arrow function parameters in parentheses |
| `bracketSpacing`             | `false`       | No spaces inside object/array brackets               |
| `bracketSameLine`            | `false`       | Put closing `>` on new line (JSX)                    |
| `singleAttributePerLine`     | `true`        | Each JSX/HTML attribute on its own line              |
| `endOfLine`                  | `'lf'`        | Unix-style line endings                              |
| `embeddedLanguageFormatting` | `'auto'`      | Format code in template literals                     |
| `htmlWhitespaceSensitivity`  | `'ignore'`    | Ignore HTML whitespace for cleaner formatting        |
| `proseWrap`                  | `'always'`    | Wrap markdown/comments at printWidth                 |
| `quoteProps`                 | `'as-needed'` | Only quote object properties when necessary          |

## Attribute Organization

The configuration uses `prettier-plugin-organize-attributes` for sophisticated HTML/JSX attribute sorting.

### Attribute Grouping Order

Attributes are organized in the following hierarchy:

1. **Structural Directives** - `*ngIf`, `*ngFor`, `v-if`, etc.
2. **Element References** - `ref`, `#templateRef`
3. **Core Identification**
    - `id`
    - `class`/`className`
    - `key` (React)
    - `type`
    - `name`
4. **Form Attributes**
    - `value`
    - `placeholder`
    - `required`
    - `disabled`
5. **Angular-Specific** (in logical order)
    - Animation triggers
    - Animation inputs
    - Property bindings `[prop]`
    - Two-way bindings `[(ngModel)]`
    - Event bindings `(click)`
6. **Data Attributes** - `data-*`
7. **Accessibility**
    - `aria-*`
    - `role`
    - `tabindex`
8. **Event Handlers** - `onClick`, `onSubmit`, etc.
9. **Everything Else** - Any ungrouped attributes

### Attribute Options

| Option                         | Value     | Description                                  |
| ------------------------------ | --------- | -------------------------------------------- |
| `attributeSort`                | `'ASC'`   | Sort attributes alphabetically within groups |
| `attributeIgnoreCase`          | `true`    | Case-insensitive sorting                     |
| `attributeNewlines`            | `'auto'`  | Automatically determine line breaks          |
| `attributeNewlinesThreshold`   | `3`       | Put attributes on new lines if 3+ attributes |
| `customAttributeValueWrapping` | See below | Preserve specific attribute formatting       |

#### Custom Attribute Value Wrapping

```javascript
{
  className: 'preserve-newlines',  // Keep className formatting
  style: 'preserve-newlines'       // Keep inline style formatting
}
```

## File-Specific Overrides

### JSON Files

```javascript
// Standard JSON
{ parser: 'json' }

// Package files with sorting
{
  parser: 'json-stringify',
  plugins: ['sort-package-json']
}
```

### Stylesheets

```javascript
// CSS/SCSS files
{
  printWidth: 120,
  singleQuote: false  // CSS typically uses double quotes
}
```

### Markup Files

```javascript
// XML files
{
  parser: 'xml',
  plugins: ['@prettier/plugin-xml']
}

// YAML files
{
  tabWidth: 2,
  parser: 'yaml'
}

// Markdown files
{
  tabWidth: 2,
  parser: 'markdown'
}
```

### Templates

```javascript
// Angular component templates
{
  printWidth: 120,
  parser: 'angular',
  ...attributeOptions  // Full attribute organization
}
```

### JavaScript/TypeScript

```javascript
{
  printWidth: 100,              // Slightly shorter for readability
  parser: 'typescript',         // TS parser for both JS/TS
  singleAttributePerLine: true, // JSX attributes on separate lines
  ...attributeOptions           // Apply attribute sorting for JSX
}
```

## Plugins

### Included Plugins

1. **prettier-plugin-organize-attributes** - Intelligent HTML/JSX attribute sorting
2. **@prettier/plugin-xml** - XML formatting support
3. **sort-package-json** - Automatic package.json field ordering

### Plugin Configuration

Each plugin is configured with specific options optimized for the Sensed development workflow.

## Examples

### Before/After Formatting

#### JSX Component

**Before:**

```jsx
<Button
    disabled={isLoading}
    className="btn-primary"
    onClick={handleClick}
    type="submit"
    data-testid="submit-btn"
>
    Submit
</Button>
```

**After:**

```jsx
<Button
    type="submit"
    className="btn-primary"
    disabled={isLoading}
    data-testid="submit-btn"
    onClick={handleClick}
>
    Submit
</Button>
```

#### Angular Template

**Before:**

```html
<input
    [value]="user.name"
    (input)="onNameChange($event)"
    type="text"
    required
    placeholder="Enter name"
    class="form-control"
/>
```

**After:**

```html
<input
    type="text"
    class="form-control"
    placeholder="Enter name"
    required
    [value]="user.name"
    (input)="onNameChange($event)"
/>
```

#### Package.json

**Before:**

```json
{
  "version": "1.0.0",
  "dependencies": {...},
  "name": "my-package",
  "scripts": {...}
}
```

**After:**

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "scripts": {...},
  "dependencies": {...}
}
```

## Troubleshooting

### Common Issues

**1. Conflicting ESLint Rules**

- Use `eslint-config-prettier` to disable conflicting rules
- Install: `npm install --save-dev eslint-config-prettier`
- Add to ESLint config: `extends: ['@sensed/eslint']` (already includes prettier config)

**2. Editor Integration**

- Install Prettier extension for your editor
- Set Prettier as default formatter
- Enable format on save

**3. Git Line Ending Issues**

- Configuration uses `endOfLine: 'lf'` for consistency
- Configure Git: `git config core.autocrlf input` (Windows)

**4. Plugin Loading Errors**

- Ensure all peer dependencies are installed
- Check that plugin paths are correct
- Clear node_modules and reinstall if needed

### Performance Optimization

**Large Codebases:**

- Use `.prettierignore` to exclude large files
- Run formatting on specific file patterns
- Consider using `--cache` flag for repeated runs

**CI/CD Integration:**

```bash
# Check formatting in CI
npm run format:check

# Auto-fix in development
npm run format
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this configuration.

## License

MIT License - see [LICENSE](./LICENSE) for details.
