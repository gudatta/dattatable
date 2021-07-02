"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mask = void 0;
var generate_1 = require("./generate");
function mask(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-mask\" viewBox=\"0 0 16 16\">\n  <path d=\"M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546zM4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z\"/>\n</svg>", height, width);
}
exports.mask = mask;
