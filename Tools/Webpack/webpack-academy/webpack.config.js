const path = require("path");
const  ExamplePlugin = require("./ExamplePlugin.js");

module.exports = {
  // first file in dependency graph
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  },
  plugins: [
    new ExamplePlugin()
  ]
}
