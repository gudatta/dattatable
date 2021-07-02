"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.micFill = void 0;
var generate_1 = require("./generate");
function micFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-mic-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z\"/>\n  <path d=\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"/>\n</svg>", height, width);
}
exports.micFill = micFill;
