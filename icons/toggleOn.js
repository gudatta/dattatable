"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleOn = void 0;
var generate_1 = require("./generate");
function toggleOn(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-toggle-on\" viewBox=\"0 0 16 16\">\n  <path d=\"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\"/>\n</svg>", height, width);
}
exports.toggleOn = toggleOn;
