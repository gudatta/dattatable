"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileEarmarkRuled = void 0;
var generate_1 = require("../generate");
function fileEarmarkRuled(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark-ruled\" viewBox=\"0 0 16 16\">\n  <path d=\"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h7v1a1 1 0 0 1-1 1H6zm7-3H6v-2h7v2z\"/>\n</svg>", height, width);
}
exports.fileEarmarkRuled = fileEarmarkRuled;
