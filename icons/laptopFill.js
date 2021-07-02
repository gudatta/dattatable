"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laptopFill = void 0;
var generate_1 = require("../generate");
function laptopFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-laptop-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z\"/>\n</svg>", height, width);
}
exports.laptopFill = laptopFill;
