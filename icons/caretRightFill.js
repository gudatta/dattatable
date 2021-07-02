"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretRightFill = void 0;
var generate_1 = require("../generate");
function caretRightFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-right-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\"/>\n</svg>", height, width);
}
exports.caretRightFill = caretRightFill;
