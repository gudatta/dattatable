"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareHalf = void 0;
var generate_1 = require("../generate");
function squareHalf(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-square-half\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z\"/>\n</svg>", height, width);
}
exports.squareHalf = squareHalf;
