"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listNested = void 0;
var generate_1 = require("../generate");
function listNested(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-list-nested\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z\"/>\n</svg>", height, width);
}
exports.listNested = listNested;
