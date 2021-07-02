"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plus = void 0;
var generate_1 = require("../generate");
function plus(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n</svg>", height, width);
}
exports.plus = plus;
