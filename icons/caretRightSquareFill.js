"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretRightSquareFill = void 0;
var generate_1 = require("./generate");
function caretRightSquareFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-right-square-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z\"/>\n</svg>", height, width);
}
exports.caretRightSquareFill = caretRightSquareFill;
