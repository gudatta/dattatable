"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slashSquareFill = void 0;
var generate_1 = require("./generate");
function slashSquareFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-slash-square-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.354 5.354-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708z\"/>\n</svg>", height, width);
}
exports.slashSquareFill = slashSquareFill;
