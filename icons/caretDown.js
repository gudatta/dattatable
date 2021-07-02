"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretDown = void 0;
var generate_1 = require("./generate");
function caretDown(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-caret-down\" viewBox=\"0 0 16 16\">\n  <path d=\"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z\"/>\n</svg>", height, width);
}
exports.caretDown = caretDown;
