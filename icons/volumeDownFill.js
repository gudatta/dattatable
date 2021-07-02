"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeDownFill = void 0;
var generate_1 = require("./generate");
function volumeDownFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-volume-down-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z\"/>\n</svg>", height, width);
}
exports.volumeDownFill = volumeDownFill;
