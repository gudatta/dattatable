"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowBarUp = void 0;
var generate_1 = require("./generate");
function arrowBarUp(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-bar-up\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z\"/>\n</svg>", height, width);
}
exports.arrowBarUp = arrowBarUp;
