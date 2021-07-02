"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heartFill = void 0;
var generate_1 = require("../generate");
function heartFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart-fill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n</svg>", height, width);
}
exports.heartFill = heartFill;
