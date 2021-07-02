"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretRight = void 0;
var generate_1 = require("../generate");
function caretRight(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-right\" viewBox=\"0 0 16 16\">\n  <path d=\"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z\"/>\n</svg>", height, width);
}
exports.caretRight = caretRight;
