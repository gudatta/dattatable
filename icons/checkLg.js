"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLg = void 0;
var generate_1 = require("./generate");
function checkLg(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check-lg\" viewBox=\"0 0 16 16\">\n  <path d=\"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z\"/>\n</svg>", height, width);
}
exports.checkLg = checkLg;
