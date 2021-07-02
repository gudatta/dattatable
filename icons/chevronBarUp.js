"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chevronBarUp = void 0;
var generate_1 = require("../generate");
function chevronBarUp(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-bar-up\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z\"/>\n</svg>", height, width);
}
exports.chevronBarUp = chevronBarUp;
