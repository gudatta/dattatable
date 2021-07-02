"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouseFill = void 0;
var generate_1 = require("../generate");
function mouseFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-mouse-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z\"/>\n</svg>", height, width);
}
exports.mouseFill = mouseFill;
