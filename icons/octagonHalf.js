"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octagonHalf = void 0;
var generate_1 = require("../generate");
function octagonHalf(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-octagon-half\" viewBox=\"0 0 16 16\">\n  <path d=\"M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM8 15h2.9l4.1-4.1V5.1L10.9 1H8v14z\"/>\n</svg>", height, width);
}
exports.octagonHalf = octagonHalf;
