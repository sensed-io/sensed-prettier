# Contributing to @sensed/prettier-config

Thank you for your interest in contributing! This document provides guidelines for contributing to our shared Prettier configuration.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test the configuration on sample projects

## Making Changes

### Configuration Changes

When modifying the Prettier configuration:

1. Update `.prettierrc.json` with your changes
2. Test the new configuration on various file types:
   - JavaScript (.js)
   - TypeScript (.ts, .tsx)
   - JSON (.json)
   - Markdown (.md)
   - CSS/SCSS (.css, .scss)
   - HTML (.html)

3. Update the README.md if the changes affect usage
4. Update CHANGELOG.md with your changes
5. Bump the version in package.json following semantic versioning

### Testing Your Changes

Create test files in a temporary directory and run:

```bash
# Format files with your config
npx prettier --config .prettierrc.json --write test-files/**/*

# Check formatting
npx prettier --config .prettierrc.json --check test-files/**/*
```

## Versioning Guidelines

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0): Breaking changes that require projects to update their usage
- **MINOR** (0.x.0): New features or non-breaking changes
- **PATCH** (0.0.x): Bug fixes and small improvements

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the guidelines above
3. Update documentation as needed
4. Test your changes thoroughly
5. Create a pull request with a clear description of changes

## Configuration Philosophy

Our Prettier configuration aims to:

- Maintain consistency across all Sensed projects
- Follow widely-accepted JavaScript/TypeScript formatting standards
- Balance readability with compactness
- Work well with popular editors and IDEs
- Minimize diff noise in version control

## Questions?

If you have questions about the configuration or contributing process, please open an issue for discussion.
