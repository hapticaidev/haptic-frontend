module.exports = {
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: [".eslintrc.cjs"],
  globals: {
    React: "readonly",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "import/prefer-default-export": "off",
    "no-unreachable": "error",
    "react/react-in-jsx-scope": "off",
  },
  env: {
    jest: true,
  },
  root: true,
};
