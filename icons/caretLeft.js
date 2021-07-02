"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretLeft = void 0;
var generate_1 = require("./generate");
function caretLeft(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-left\" viewBox=\"0 0 16 16\">\n  <path d=\"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z\"/>\n</svg>", height, width);
}
exports.caretLeft = caretLeft;
