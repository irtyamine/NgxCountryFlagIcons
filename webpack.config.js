"use strict";

const path = require("path");
const _root = path.resolve(process.cwd(), "."); // project root folder
const root = path.join.bind(path, _root); // We use the helper to ensure that the path is always relative to the workspace root

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                syntax: "postcss-scss",
                ident: "postcss",
                plugins: [
                  require("tailwindcss")(root("tailwind.config.js")),
                  require('autoprefixer'),
                ],
              }
            }
          }
        ]
      }
    ],
  },
};
