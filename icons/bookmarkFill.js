"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkFill = void 0;
var generate_1 = require("./generate");
function bookmarkFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bookmark-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z\"/>\n</svg>", height, width);
}
exports.bookmarkFill = bookmarkFill;
