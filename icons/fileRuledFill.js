"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRuledFill = void 0;
var generate_1 = require("../generate");
function fileRuledFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-ruled-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7H6v2h8V7zm0 3H6v2h8v-2zm0 3H6v3h6a2 2 0 0 0 2-2v-1zm-9 3v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2z\"/>\n</svg>", height, width);
}
exports.fileRuledFill = fileRuledFill;
