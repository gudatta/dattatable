"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightningChargeFill = void 0;
var generate_1 = require("./generate");
function lightningChargeFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-lightning-charge-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z\"/>\n</svg>", height, width);
}
exports.lightningChargeFill = lightningChargeFill;
