"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowDown = void 0;
var generate_1 = require("./generate");
function arrowDown(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z\"/>\n</svg>", height, width);
}
exports.arrowDown = arrowDown;
