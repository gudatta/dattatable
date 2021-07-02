"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipStartCircleFill = void 0;
var generate_1 = require("../generate");
function skipStartCircleFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-skip-start-circle-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z\"/>\n</svg>", height, width);
}
exports.skipStartCircleFill = skipStartCircleFill;
