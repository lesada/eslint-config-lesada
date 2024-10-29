// eslint.config.mjs
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import importHelpers from "eslint-plugin-import-helpers";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

export default {
  ignores: ["node_modules", "dist"],
  languageOptions: {
    parser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: {
    "@typescript-eslint": typescript,
    "import-helpers": importHelpers,
    "react-hooks": reactHooks,
    "unused-imports": unusedImports,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...typescript.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...prettier.rules,

    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "/^react$/",
          "/^react-native$/",
          "/^next$/",
          "module",
          "/^@//",
          ["sibling", "index"],
          "parent",
          "/./styles/",
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],

    "@typescript-eslint/no-explicit-any": "off",
  },
};
