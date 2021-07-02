"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check2 = void 0;
var generate_1 = require("./generate");
function check2(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check2\" viewBox=\"0 0 16 16\">\n  <path d=\"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z\"/>\n</svg>", height, width);
}
exports.check2 = check2;
