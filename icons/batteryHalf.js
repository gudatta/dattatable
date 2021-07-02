"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batteryHalf = void 0;
var generate_1 = require("./generate");
function batteryHalf(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-battery-half\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 6h5v4H2V6z\"/>\n  <path d=\"M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z\"/>\n</svg>", height, width);
}
exports.batteryHalf = batteryHalf;
