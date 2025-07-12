import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react: pluginReact,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/no-unescaped-entities": "off", // 🔧 Disable the rule here
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // ✅ Put this first so it gets overridden by your config above
  pluginReact.configs.flat.recommended,
]);
