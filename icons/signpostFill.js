"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signpostFill = void 0;
var generate_1 = require("../generate");
function signpostFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-signpost-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z\"/>\n</svg>", height, width);
}
exports.signpostFill = signpostFill;
