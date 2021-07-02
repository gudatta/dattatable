"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusCircleFill = void 0;
var generate_1 = require("../generate");
function plusCircleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z\"/>\n</svg>", height, width);
}
exports.plusCircleFill = plusCircleFill;
