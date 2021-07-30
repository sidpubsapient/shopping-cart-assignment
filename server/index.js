// const path = require("path");

// ignore `.scss` imports
require("ignore-styles");

// transpile imports on the fly
require("@babel/register")({
    ignore: [/(node_modules)/],
    presets: ["@babel/preset-env", "@babel/preset-react"],
});

// import express server
require("./express.js");
