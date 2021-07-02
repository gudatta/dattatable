"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatFill = void 0;
var generate_1 = require("../generate");
function chatFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chat-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z\"/>\n</svg>", height, width);
}
exports.chatFill = chatFill;
