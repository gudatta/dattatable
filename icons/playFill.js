"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playFill = void 0;
var generate_1 = require("../generate");
function playFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-play-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z\"/>\n</svg>", height, width);
}
exports.playFill = playFill;
