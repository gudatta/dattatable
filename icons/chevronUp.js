"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chevronUp = void 0;
var generate_1 = require("../generate");
function chevronUp(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-up\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z\"/>\n</svg>", height, width);
}
exports.chevronUp = chevronUp;
