"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle2On = void 0;
var generate_1 = require("./generate");
function toggle2On(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-toggle2-on\" viewBox=\"0 0 16 16\">\n  <path d=\"M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z\"/>\n  <path d=\"M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z\"/>\n</svg>", height, width);
}
exports.toggle2On = toggle2On;
