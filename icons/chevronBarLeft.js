"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chevronBarLeft = void 0;
var generate_1 = require("./generate");
function chevronBarLeft(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-bar-left\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z\"/>\n</svg>", height, width);
}
exports.chevronBarLeft = chevronBarLeft;
