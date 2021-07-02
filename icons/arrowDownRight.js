"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowDownRight = void 0;
var generate_1 = require("./generate");
function arrowDownRight(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down-right\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z\"/>\n</svg>", height, width);
}
exports.arrowDownRight = arrowDownRight;
