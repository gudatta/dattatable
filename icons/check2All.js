"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check2All = void 0;
var generate_1 = require("./generate");
function check2All(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check2-all\" viewBox=\"0 0 16 16\">\n  <path d=\"M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z\"/>\n  <path d=\"m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z\"/>\n</svg>", height, width);
}
exports.check2All = check2All;
