"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle2Off = void 0;
var generate_1 = require("./generate");
function toggle2Off(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-toggle2-off\" viewBox=\"0 0 16 16\">\n  <path d=\"M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z\"/>\n  <path d=\"M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z\"/>\n</svg>", height, width);
}
exports.toggle2Off = toggle2Off;
