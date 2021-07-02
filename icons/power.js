"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = void 0;
var generate_1 = require("../generate");
function power(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-power\" viewBox=\"0 0 16 16\">\n  <path d=\"M7.5 1v7h1V1h-1z\"/>\n  <path d=\"M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z\"/>\n</svg>", height, width);
}
exports.power = power;
