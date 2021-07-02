"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compass = void 0;
var generate_1 = require("./generate");
function compass(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-compass\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z\"/>\n  <path d=\"m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z\"/>\n</svg>", height, width);
}
exports.compass = compass;
