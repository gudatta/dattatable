"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diamondHalf = void 0;
var generate_1 = require("../generate");
function diamondHalf(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-diamond-half\" viewBox=\"0 0 16 16\">\n  <path d=\"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z\"/>\n</svg>", height, width);
}
exports.diamondHalf = diamondHalf;
