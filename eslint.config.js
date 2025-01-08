import globals from "globals"
import jsLint from "@eslint/js"
import tsLint from "typescript-eslint"
// import vueLint from "eslint-plugin-vue"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {
      // common parser options, enable TypeScript and JSX
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module"
      },
    },
  },

  // {
  //   files: ["*.vue", "**/*.vue"],
  //   languageOptions: {
  //     parser: "vue-eslint-parser",
  //     parserOptions: {
  //       // <script lang="ts" /> to enable TypeScript in Vue SFC
  //       parser: "@typescript-eslint/parser",
  //       sourceType: "module"
  //     }
  //   }
  // },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
  },

  // syntax rules
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  // ...vueLint.configs["flat/essential"],

  // {
  //   ignores: ["node_modules", "dist", "build", "**/node_modules"],
  // },

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
]