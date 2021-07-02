"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowRightCircle = void 0;
var generate_1 = require("../generate");
function arrowRightCircle(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right-circle\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z\"/>\n</svg>", height, width);
}
exports.arrowRightCircle = arrowRightCircle;
