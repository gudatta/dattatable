"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowDownLeft = void 0;
var generate_1 = require("../generate");
function arrowDownLeft(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down-left\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z\"/>\n</svg>", height, width);
}
exports.arrowDownLeft = arrowDownLeft;
