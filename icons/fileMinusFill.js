"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileMinusFill = void 0;
var generate_1 = require("../generate");
function fileMinusFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-minus-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z\"/>\n</svg>", height, width);
}
exports.fileMinusFill = fileMinusFill;
