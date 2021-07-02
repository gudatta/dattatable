"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.record2Fill = void 0;
var generate_1 = require("./generate");
function record2Fill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-record2-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z\"/>\n  <path d=\"M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/>\n</svg>", height, width);
}
exports.record2Fill = record2Fill;
