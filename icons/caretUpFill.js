"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretUpFill = void 0;
var generate_1 = require("../generate");
function caretUpFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-up-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z\"/>\n</svg>", height, width);
}
exports.caretUpFill = caretUpFill;
