"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileEarmarkFill = void 0;
var generate_1 = require("./generate");
function fileEarmarkFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z\"/>\n</svg>", height, width);
}
exports.fileEarmarkFill = fileEarmarkFill;
