"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabletLandscape = void 0;
var generate_1 = require("../generate");
function tabletLandscape(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-tablet-landscape\" viewBox=\"0 0 16 16\">\n  <path d=\"M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z\"/>\n  <path d=\"M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z\"/>\n</svg>", height, width);
}
exports.tabletLandscape = tabletLandscape;
