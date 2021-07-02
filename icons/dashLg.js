"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashLg = void 0;
var generate_1 = require("./generate");
function dashLg(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-dash-lg\" viewBox=\"0 0 16 16\">\n  <path d=\"M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z\"/>\n</svg>", height, width);
}
exports.dashLg = dashLg;
