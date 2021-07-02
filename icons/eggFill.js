"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eggFill = void 0;
var generate_1 = require("../generate");
function eggFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-egg-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z\"/>\n</svg>", height, width);
}
exports.eggFill = eggFill;
