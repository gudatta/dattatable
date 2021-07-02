"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suitDiamondFill = void 0;
var generate_1 = require("../generate");
function suitDiamondFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-suit-diamond-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z\"/>\n</svg>", height, width);
}
exports.suitDiamondFill = suitDiamondFill;
