"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftFill = void 0;
var generate_1 = require("../generate");
function shiftFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-shift-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z\"/>\n</svg>", height, width);
}
exports.shiftFill = shiftFill;
