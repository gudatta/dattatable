"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.record = void 0;
var generate_1 = require("./generate");
function record(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-record\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z\"/>\n</svg>", height, width);
}
exports.record = record;
