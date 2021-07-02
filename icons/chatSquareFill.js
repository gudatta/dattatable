"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSquareFill = void 0;
var generate_1 = require("../generate");
function chatSquareFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chat-square-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"/>\n</svg>", height, width);
}
exports.chatSquareFill = chatSquareFill;
