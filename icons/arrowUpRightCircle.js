"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowUpRightCircle = void 0;
var generate_1 = require("../generate");
function arrowUpRightCircle(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-up-right-circle\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z\"/>\n</svg>", height, width);
}
exports.arrowUpRightCircle = arrowUpRightCircle;
