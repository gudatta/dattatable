"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geoAltFill = void 0;
var generate_1 = require("../generate");
function geoAltFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/>\n</svg>", height, width);
}
exports.geoAltFill = geoAltFill;
