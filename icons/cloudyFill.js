"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudyFill = void 0;
var generate_1 = require("./generate");
function cloudyFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-cloudy-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973z\"/>\n</svg>", height, width);
}
exports.cloudyFill = cloudyFill;
