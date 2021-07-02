"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headphones = void 0;
var generate_1 = require("./generate");
function headphones(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-headphones\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z\"/>\n</svg>", height, width);
}
exports.headphones = headphones;
