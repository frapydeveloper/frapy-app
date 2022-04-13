const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@core": path.resolve(__dirname, "src/core"),
      "@style": path.resolve(__dirname, "src/core/style"),
      "@config": path.resolve(__dirname, "src/core/config"),
      "@screens": path.resolve(__dirname, "src/app/screens"),
    },
  };

  return config;
};
