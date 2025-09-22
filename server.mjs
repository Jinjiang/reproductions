import register from "react-server-dom-webpack/node-register";
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import babelRegister from "@babel/register";

import { createRequire } from "module";
import express from "express";
import React from "react";
import { renderToPipeableStream } from "react-server-dom-webpack/server";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

register();
babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  presets: [["@babel/preset-react", { runtime: "automatic" }]],
  plugins: ["@babel/transform-modules-commonjs"],
});

const app = express();
const ReactApp = require("./app/index").default;

app.get("/", (req, res) => {
  const html = readFileSync(
    path.resolve(__dirname, "./public/index.html"),
    "utf8"
  );
  res.send(html);
});

app.get("/react", (req, res) => {
  const manifest = readFileSync(
    path.resolve(__dirname, "./public/react-client-manifest.json"),
    "utf8"
  );
  const moduleMap = JSON.parse(manifest);
  const { pipe } = renderToPipeableStream(
    React.createElement(ReactApp),
    moduleMap
  );
  pipe(res);
});

app.use(express.static(path.resolve(__dirname, "./public")));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
