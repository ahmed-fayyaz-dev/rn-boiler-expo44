/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
      development: {
        plugins: ["@babel/transform-react-jsx-source"],
      },
    },
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".json"],
          root: ["."],
          alias: {
            src: "./src",
            assets: "./assets",
            appConstants: "./appConstants",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
