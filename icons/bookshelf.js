"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookshelf = void 0;
var generate_1 = require("./generate");
function bookshelf(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bookshelf\" viewBox=\"0 0 16 16\">\n  <path d=\"M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z\"/>\n</svg>", height, width);
}
exports.bookshelf = bookshelf;
