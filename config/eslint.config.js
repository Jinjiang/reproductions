// TODO: eslint-config-airbnb-typescript

import globals from "globals"
import eslint from '@eslint/js'
import tsLint from "typescript-eslint"
import eslintJest from "eslint-plugin-jest"
import eslintImport from "eslint-plugin-import"
// import eslintImport from "eslint-plugin-import-x"
import eslintReact from "eslint-plugin-react"
import eslintReactHooks from "eslint-plugin-react-hooks"
import eslintMdx from "eslint-plugin-mdx"
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
      // TODO: can be removed
      'mdx/code-blocks': false,
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

  // avoid prettier conflicts
  eslintPrettier
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

      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',

      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',

      // testing
      'jest/expect-expect': 'off',
      // "jest/max-expects": [ "error", { "max": 5 } ],
      'import/export': 'off',
      // 'import/no-commonjs': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      // "@typescript-eslint/no-useless-empty-export": "error",
    },
  },
)

// console.log('tsLintConfig', tsLintConfig)

const mdxLintConfig =[
  // mdx rules
  {
    ...eslintMdx.flat,
    rules: {
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintMdx.configs.flat.rules,
      'react/jsx-uses-vars': 'error',
      'import/extensions': 'off',
      'react/jsx-uses-react': 'error',
      'import/no-unresolved': 'off'
    },
  },

  // mdx code blocks rules
  {
    ...eslintMdx.flatCodeBlocks,
  },
]

// console.log('mdxLintConfig', mdxLintConfig)

export default [
  ...generalLintConfig,
  ...tsLintConfig,
  ...mdxLintConfig,
];
