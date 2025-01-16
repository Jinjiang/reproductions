import globals from "globals"
import eslint from '@eslint/js'
// eslint-disable-next-line import/no-unresolved
import tsLint from "typescript-eslint"
import eslintJest from "eslint-plugin-jest"
import eslintImport from "eslint-plugin-import"
// import eslintImport from "eslint-plugin-import-x"
import eslintReact from "eslint-plugin-react"
import eslintReactHooks from "eslint-plugin-react-hooks"
import * as eslintMdx from "eslint-plugin-mdx"
import eslintPrettier from "eslint-config-prettier"

// import { tsconfigPath } from "./vars.mjs"

const generalLintConfig = [
  // plugins
  {
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
    },
  },

  // global settings
  {
    settings: {
      jest: {
        version: 27,
      },
      react: {
        version: '17.0',
      },
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.mocha,
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
      },
    },
  },
]

const tsLintConfig = tsLint.config(
  // combined TS/JS rules
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    extends: [
      eslint.configs.recommended,
      tsLint.configs.recommended,
      eslintImport.flatConfigs.recommended,
      eslintImport.flatConfigs.typescript,
      eslintReact.configs.flat.recommended,
      eslintJest.configs['flat/recommended'],
    ],
    rules: {
      ...eslintReactHooks.configs.recommended.rules,

      "@typescript-eslint/no-unused-expressions": "off",
      // Disable the rule because this causes issues in case there are multiple eslint versions
      // on the process, as it depends on some outer context.
      // this should be solve once upgrading to @typescript-eslint/eslint-plugin v6
      // see more details here -
      // https://stackoverflow.com/questions/76457373/cannot-read-properties-of-undefined-reading-gettokens-occurred-while-linting
      '@typescript-eslint/no-empty-function': 'off',

      'react/react-in-jsx-scope': 'off',

      // testing
      // 'jest/expect-expect': 'off',
      "jest/max-expects": [ "error", { "max": 5 } ],
      // 'import/export': 'off',
      'import/no-commonjs': 'warn',
      // '@typescript-eslint/no-unused-vars': 'off',
      "@typescript-eslint/no-useless-empty-export": "error",
      // 'react/display-name': 'off',
      // 'react-hooks/rules-of-hooks': 'off',

      // opposite results
      // - main.spec.ts (3): expect-expect, expect-expect, max-expects
      // - main.ts (6): no-commonjs, export, no-unused-vars, export, no-useless-empty-export, no-unused-vars
      // - main.tsx (2): rules-of-hooks, display-name
    },
  },
)

// console.log('tsLintConfig', tsLintConfig)

const mdxLintConfig =[
  // mdx rules
  {
    files: ['**/*.{md,mdx}'],
    languageOptions: eslintMdx.flat.languageOptions,
    plugins: {
      import: eslintImport,
      mdx: eslintMdx.flat.plugins.mdx,
    },
    rules: {
      ...eslintMdx.configs.flat.rules,
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintImport.flatConfigs.recommended.rules,
      'no-unused-expressions': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off'
    }
  },
]

// console.log('mdxLintConfig', mdxLintConfig)

export default [
  ...generalLintConfig,
  ...tsLintConfig,
  ...mdxLintConfig,
  eslintPrettier,
];
