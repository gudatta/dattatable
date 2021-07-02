"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleHalf = void 0;
var generate_1 = require("./generate");
function circleHalf(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-circle-half\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\"/>\n</svg>", height, width);
}
exports.circleHalf = circleHalf;
