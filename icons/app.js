"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var generate_1 = require("../generate");
function app(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-app\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z\"/>\n</svg>", height, width);
}
exports.app = app;
