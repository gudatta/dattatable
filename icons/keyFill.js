"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyFill = void 0;
var generate_1 = require("./generate");
function keyFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-key-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n</svg>", height, width);
}
exports.keyFill = keyFill;
