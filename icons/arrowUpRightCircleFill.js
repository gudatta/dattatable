"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowUpRightCircleFill = void 0;
var generate_1 = require("./generate");
function arrowUpRightCircleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-up-right-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z\"/>\n</svg>", height, width);
}
exports.arrowUpRightCircleFill = arrowUpRightCircleFill;
