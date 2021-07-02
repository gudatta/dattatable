"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatLeftFill = void 0;
var generate_1 = require("./generate");
function chatLeftFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chat-left-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"/>\n</svg>", height, width);
}
exports.chatLeftFill = chatLeftFill;
