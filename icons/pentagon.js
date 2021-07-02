"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pentagon = void 0;
var generate_1 = require("../generate");
function pentagon(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pentagon\" viewBox=\"0 0 16 16\">\n  <path d=\"m8 1.288 6.842 5.56L12.267 15H3.733L1.158 6.847 8 1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z\"/>\n</svg>", height, width);
}
exports.pentagon = pentagon;
