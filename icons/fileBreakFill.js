"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileBreakFill = void 0;
var generate_1 = require("./generate");
function fileBreakFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-break-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M4 0h8a2 2 0 0 1 2 2v7H2V2a2 2 0 0 1 2-2zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z\"/>\n</svg>", height, width);
}
exports.fileBreakFill = fileBreakFill;
