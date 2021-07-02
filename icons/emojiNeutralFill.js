"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiNeutralFill = void 0;
var generate_1 = require("../generate");
function emojiNeutralFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-emoji-neutral-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z\"/>\n</svg>", height, width);
}
exports.emojiNeutralFill = emojiNeutralFill;
