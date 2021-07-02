"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pentagonFill = void 0;
var generate_1 = require("./generate");
function pentagonFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pentagon-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"m8 0 8 6.5-3 9.5H3L0 6.5 8 0z\"/>\n</svg>", height, width);
}
exports.pentagonFill = pentagonFill;
