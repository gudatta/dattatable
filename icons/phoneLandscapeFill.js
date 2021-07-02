"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneLandscapeFill = void 0;
var generate_1 = require("../generate");
function phoneLandscapeFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-phone-landscape-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n</svg>", height, width);
}
exports.phoneLandscapeFill = phoneLandscapeFill;
