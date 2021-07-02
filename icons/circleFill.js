"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleFill = void 0;
var generate_1 = require("../generate");
function circleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-circle-fill\" viewBox=\"0 0 16 16\">\n  <circle cx=\"8\" cy=\"8\" r=\"8\"/>\n</svg>", height, width);
}
exports.circleFill = circleFill;
