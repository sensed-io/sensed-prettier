# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-08-01

### Changed

- **Package Name**: Renamed from `@sensed/prettier-config` to `@sensed/prettier` for cleaner, more concise naming
- **Repository**: Updated all documentation and examples to use the new package name
- Updated README.md with new package references

## [1.0.1] - 2025-08-01

### Fixed

- Moved Prettier plugins from `devDependencies` to `dependencies` to ensure they are installed when the package is
  consumed
- Plugins are now properly available when using the configuration in other projects

### Dependencies

- Moved `@prettier/plugin-xml`, `prettier-package-json`, `prettier-plugin-organize-attributes`, and `sort-package-json`
  to `dependencies`
- Kept `prettier` in `devDependencies` for package development and as `peerDependencies` for consumers

## [1.0.0] - 2025-08-01

### Added

- Comprehensive Prettier configuration with file-specific overrides
- Support for JavaScript, TypeScript, JSX, HTML, CSS, SCSS, LESS, YAML, Markdown, XML, and SVG
- Enhanced configuration structure with specialized parsers
- Support for XML files with `@prettier/plugin-xml`
- Package.json sorting with `prettier-package-json` and `sort-package-json`
- HTML attribute organization with `prettier-plugin-organize-attributes`
- Comprehensive `.prettierignore` with common patterns
- Documentation and usage examples
- MIT License

### Configuration Highlights

- Print width: 120 characters (90 for JS/TS)
- Tab width: 4 spaces
- Use spaces instead of tabs
- Always include semicolons
- Use single quotes
- Trailing commas set to 'all' for better diff readability
- Arrow parentheses always included for consistency
- Single attribute per line enabled for HTML
- Bracket spacing disabled for cleaner object formatting
- Use LF line endings
- Prose wrap set to 'always' for markdown files

### Dependencies

- `@prettier/plugin-xml@^3.4.2`
- `prettier-package-json@^2.8.0`
- `prettier-plugin-organize-attributes@^1.0.0`
- `sort-package-json@^3.4.0`
