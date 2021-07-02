"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
var generate_1 = require("./generate");
function slash(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-slash\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n</svg>", height, width);
}
exports.slash = slash;
