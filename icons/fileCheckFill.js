"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCheckFill = void 0;
var generate_1 = require("../generate");
function fileCheckFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-check-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z\"/>\n</svg>", height, width);
}
exports.fileCheckFill = fileCheckFill;
