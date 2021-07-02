"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chevronRight = void 0;
var generate_1 = require("../generate");
function chevronRight(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"/>\n</svg>", height, width);
}
exports.chevronRight = chevronRight;
