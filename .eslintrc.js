module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "react/jsx-curly-spacing": [2, "always"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-underscore-dangle": ["error", { "allow": ["foo_", "_bar"] }],
    },
};
