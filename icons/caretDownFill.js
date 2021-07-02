"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretDownFill = void 0;
var generate_1 = require("./generate");
function caretDownFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-down-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\"/>\n</svg>", height, width);
}
exports.caretDownFill = caretDownFill;
