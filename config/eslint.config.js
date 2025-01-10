// TODO: eslint-config-airbnb-typescript

import globals from "globals"
import tsLint from "typescript-eslint"
import eslintJest from "eslint-plugin-jest"
import eslintImport from "eslint-plugin-import"
import eslintReact from "eslint-plugin-react"
import eslintReactHooks from "eslint-plugin-react-hooks"
import eslintMdx from "eslint-plugin-mdx"
import eslintPrettier from "eslint-config-prettier"

// import { tsconfigPath } from "./vars.mjs"

const generalLintConfig = [
  // plugins
  {
    plugins: {
      jest: eslintJest,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
    },
  },

  // global settings
  {
    settings: {
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
      eslintImport.flatConfigs.recommended,
      eslintImport.flatConfigs.typescript,
      eslintReact.configs.flat.recommended,
      eslintJest.configs['flat/recommended'],
    ],
    rules: {
      ...eslintReactHooks.configs.recommended.rules,
      '@typescript-eslint/camelcase': 'off',
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'trailing-comma': 'off',
      'react/require-default-props': 'off',
      'import/extensions': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      'object-curly-newline': 'off',
      'react/react-in-jsx-scope': 'off',
      'class-methods-use-this': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'no-underscore-dangle': 'off',
      // Disable the rule because this causes issues in case there are multiple eslint versions
      // on the process, as it depends on some outer context.
      // this should be solve once upgrading to @typescript-eslint/eslint-plugin v6
      // see more details here -
      // https://stackoverflow.com/questions/76457373/cannot-read-properties-of-undefined-reading-gettokens-occurred-while-linting
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
)

console.log('tsLintConfig', tsLintConfig)

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

console.log('mdxLintConfig', mdxLintConfig)

export default [
  ...generalLintConfig,
  ...tsLintConfig,
  ...mdxLintConfig,
];
