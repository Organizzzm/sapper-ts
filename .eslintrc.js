const eslintSveltePreprocess = require("eslint-svelte3-preprocess");
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    "svelte3/preprocess": eslintSveltePreprocess(sveltePreprocess()),
  },
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
  },
};
