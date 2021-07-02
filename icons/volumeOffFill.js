"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeOffFill = void 0;
var generate_1 = require("./generate");
function volumeOffFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-volume-off-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z\"/>\n</svg>", height, width);
}
exports.volumeOffFill = volumeOffFill;
