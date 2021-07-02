"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dot = void 0;
var generate_1 = require("./generate");
function dot(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-dot\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"/>\n</svg>", height, width);
}
exports.dot = dot;
