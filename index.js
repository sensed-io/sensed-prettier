/**
 * @fileoverview Comprehensive Prettier configuration for Sensed projects
 *
 * This configuration provides sophisticated code formatting with file-specific
 * overrides and advanced attribute organization for HTML/JSX elements.
 *
 * @author Aly Nasser
 * @version 1.0.6
 */

/**
 * Advanced attribute organization options for HTML/JSX elements
 * Uses prettier-plugin-organize-attributes for sophisticated attribute sorting
 */
const attributeOptions = {
    // Plugin for organizing HTML/JSX attributes in a consistent order
    plugins: [require.resolve('prettier-plugin-organize-attributes')],

    // Sort attributes in ascending alphabetical order within each group
    attributeSort: 'ASC',

    // Ignore case when sorting attributes for consistent organization
    attributeIgnoreCase: true,

    // Automatically determine when to put attributes on new lines
    // Options: 'auto' | 'always' | 'never'
    attributeNewlines: 'auto',

    // Threshold for line breaks - if 3+ attributes, put each on new line
    attributeNewlinesThreshold: 3,

    // Space character between attributes
    attributeSeparator: ' ',

    // Preserve newlines in specific attribute values for readability
    customAttributeValueWrapping: {
        className: 'preserve-newlines', // Keep className formatting
        style: 'preserve-newlines', // Keep inline style formatting
    },

    /**
     * Attribute grouping order - defines the hierarchy for attribute organization
     * Attributes are sorted within each group, groups appear in this order
     */
    attributeGroups: [
        // Structural directives (Angular v-if, v-for, etc.)
        '$ANGULAR_STRUCTURAL_DIRECTIVE',

        // Element references (ref, #templateRef)
        '$ANGULAR_ELEMENT_REF',

        // Core identification attributes
        '$ID', // id attribute
        '$CLASS', // class/className attribute
        'key', // React key prop
        'type', // input type, button type, etc.
        'name', // form element names

        // Form-specific attributes
        'value', // input values
        'placeholder', // input placeholders
        'required', // required validation
        'disabled', // disabled state

        // Angular-specific attributes (in logical order)
        '$ANGULAR_ANIMATION', // Animation triggers
        '$ANGULAR_ANIMATION_INPUT', // Animation inputs
        '$ANGULAR_INPUT', // Property bindings [prop]
        '$ANGULAR_TWO_WAY_BINDING', // Two-way bindings [(ngModel)]
        '$ANGULAR_OUTPUT', // Event bindings (click)

        // Data attributes (data-*)
        '^data-',

        // Accessibility attributes
        '^aria-', // ARIA attributes
        'role', // ARIA role
        'tabindex', // Tab navigation order

        // Event handlers (onClick, onSubmit, etc.)
        '^on[A-Z].*',

        // Everything else not specifically grouped
        '$DEFAULT',
    ],
};

/**
 * Main Prettier configuration object
 * Exports comprehensive formatting rules for consistent code style across Sensed projects
 */
module.exports = {
    // JSON Schema for editor support and validation
    $schema: 'https://json.schemastore.org/prettierrc',

    // =====================================================
    // GLOBAL FORMATTING OPTIONS
    // =====================================================

    // Maximum line length before wrapping (120 chars for readability)
    printWidth: 120,

    // Number of spaces per indentation level
    tabWidth: 4,

    // Use spaces instead of tabs for consistent cross-platform formatting
    useTabs: false,

    // Always wrap arrow function parameters in parentheses for consistency
    // (x) => x instead of x => x
    arrowParens: 'always',

    // No spaces inside object/array brackets: {foo} instead of { foo }
    bracketSpacing: false,

    // Put closing > on same line as last attribute (JSX)
    bracketSameLine: false,

    // Unix-style line endings for cross-platform compatibility
    endOfLine: 'lf',

    // Format code embedded in template literals and other languages
    embeddedLanguageFormatting: 'auto',

    // Experimental ternary formatting (disabled for stability)
    experimentalTernaries: false,

    // Ignore whitespace sensitivity in HTML for cleaner formatting
    htmlWhitespaceSensitivity: 'ignore',

    // Wrap prose (markdown, comments) at printWidth
    proseWrap: 'always',

    // Only quote object properties when necessary
    quoteProps: 'as-needed',

    // Don't require @prettier pragma comments to format files
    requirePragma: false,

    // Don't insert @prettier pragma comments
    insertPragma: false,

    // Always add semicolons for clarity and ASI safety
    semi: true,

    // Put each attribute on its own line for better readability
    singleAttributePerLine: true,

    // Use single quotes for consistency (except when escaping required)
    singleQuote: true,

    // Add trailing commas wherever valid (ES5+, helps with diffs)
    trailingComma: 'all',

    // Don't indent <script> and <style> tags in Vue files
    vueIndentScriptAndStyle: false,

    // =====================================================
    // FILE-SPECIFIC OVERRIDES
    // =====================================================
    overrides: [
        // =====================================================
        // JSON FILES
        // =====================================================
        {
            // Standard JSON files
            files: ['*.json'],
            options: {
                parser: 'json',
            },
        },
        {
            // Package lock files - use stringify parser for exact formatting
            files: ['package-lock.json'],
            options: {
                parser: 'json-stringify',
            },
        },
        {
            // Package.json files with automatic sorting plugin
            files: ['package.json', 'ng-package.json'],
            options: {
                parser: 'json-stringify',
                plugins: [require.resolve(require('node:path').resolve(__dirname, 'plugins', 'sort-package-json.js'))],
            },
        },

        // =====================================================
        // STYLESHEET FILES
        // =====================================================
        {
            // SCSS files
            files: ['*.scss'],
            options: {parser: 'scss'},
        },
        {
            // CSS and SCSS files with specific formatting
            files: ['*.css', '*.scss'],
            options: {
                printWidth: 120, // Full width for CSS
                singleQuote: false, // CSS typically uses double quotes
            },
        },

        // =====================================================
        // MARKUP AND DATA FILES
        // =====================================================
        {
            // XML files with dedicated plugin
            files: ['*.xml'],
            options: {
                parser: 'xml',
                plugins: [require.resolve('@prettier/plugin-xml')],
            },
        },
        {
            // YAML files with reduced indentation
            files: ['*.yml', '*.yaml'],
            options: {tabWidth: 2, parser: 'yaml'},
        },
        {
            // Markdown files with reduced indentation for better nesting
            files: ['*.md'],
            options: {tabWidth: 2, parser: 'markdown'},
        },

        // =====================================================
        // COMPONENT TEMPLATES
        // =====================================================
        {
            // Angular component templates with attribute organization
            files: ['*.component.html'],
            options: {
                printWidth: 120,
                parser: 'angular',
                ...attributeOptions, // Apply sophisticated attribute sorting
            },
        },

        // =====================================================
        // JAVASCRIPT/TYPESCRIPT FILES
        // =====================================================
        {
            // JavaScript and TypeScript files with enhanced formatting
            files: ['*.js', '*.ts'],
            options: {
                ...attributeOptions, // Apply attribute sorting for JSX
                bracketSameLine: false, // Keep > on new line
                singleAttributePerLine: true, // Each JSX attribute on new line
                printWidth: 100, // Slightly shorter for better readability
                parser: 'typescript', // Use TS parser for both JS/TS
            },
        },
    ],
};
