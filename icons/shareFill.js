"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareFill = void 0;
var generate_1 = require("./generate");
function shareFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-share-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z\"/>\n</svg>", height, width);
}
exports.shareFill = shareFill;
