const path = require("path");

// 导出配置信息
module.exports = {
  entry: "./src/js/component.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
};
