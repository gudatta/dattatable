"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFill = void 0;
var generate_1 = require("../generate");
function fileFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-fill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\"/>\n</svg>", height, width);
}
exports.fileFill = fileFill;
