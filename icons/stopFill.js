"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopFill = void 0;
var generate_1 = require("./generate");
function stopFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-stop-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z\"/>\n</svg>", height, width);
}
exports.stopFill = stopFill;
