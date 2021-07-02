"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleFill = void 0;
var generate_1 = require("../generate");
function triangleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-triangle-fill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z\"/>\n</svg>", height, width);
}
exports.triangleFill = triangleFill;
