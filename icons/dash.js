"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dash = void 0;
var generate_1 = require("./generate");
function dash(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-dash\" viewBox=\"0 0 16 16\">\n  <path d=\"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z\"/>\n</svg>", height, width);
}
exports.dash = dash;
