"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordBtn = void 0;
var generate_1 = require("../generate");
function recordBtn(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-record-btn\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n  <path d=\"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z\"/>\n</svg>", height, width);
}
exports.recordBtn = recordBtn;
