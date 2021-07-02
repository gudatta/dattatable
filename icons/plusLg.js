"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusLg = void 0;
var generate_1 = require("../generate");
function plusLg(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z\"/>\n</svg>", height, width);
}
exports.plusLg = plusLg;
