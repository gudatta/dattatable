"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashCircleFill = void 0;
var generate_1 = require("./generate");
function dashCircleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-dash-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z\"/>\n</svg>", height, width);
}
exports.dashCircleFill = dashCircleFill;
