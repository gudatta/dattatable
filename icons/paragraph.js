"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paragraph = void 0;
var generate_1 = require("../generate");
function paragraph(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-paragraph\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z\"/>\n</svg>", height, width);
}
exports.paragraph = paragraph;
