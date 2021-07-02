"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
var generate_1 = require("../generate");
function exclude(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclude\" viewBox=\"0 0 16 16\">\n  <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1V4z\"/>\n</svg>", height, width);
}
exports.exclude = exclude;
