"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightningFill = void 0;
var generate_1 = require("../generate");
function lightningFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-lightning-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z\"/>\n</svg>", height, width);
}
exports.lightningFill = lightningFill;
