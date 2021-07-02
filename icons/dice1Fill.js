"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dice1Fill = void 0;
var generate_1 = require("./generate");
function dice1Fill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-dice-1-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/>\n</svg>", height, width);
}
exports.dice1Fill = dice1Fill;
