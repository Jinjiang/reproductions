import path from "path";
import { fileURLToPath } from "url";
import ReactServerWebpackPlugin from "react-server-dom-webpack/plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: [path.resolve(__dirname, "./src/index.js")],
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              // ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "automatic" }]
            ],
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ReactServerWebpackPlugin({ isServer: false })],
};
