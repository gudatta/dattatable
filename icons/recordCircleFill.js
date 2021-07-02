"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordCircleFill = void 0;
var generate_1 = require("../generate");
function recordCircleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-record-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n</svg>", height, width);
}
exports.recordCircleFill = recordCircleFill;
