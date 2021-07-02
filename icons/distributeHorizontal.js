"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distributeHorizontal = void 0;
var generate_1 = require("../generate");
function distributeHorizontal(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-distribute-horizontal\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5zm-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z\"/>\n  <path d=\"M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z\"/>\n</svg>", height, width);
}
exports.distributeHorizontal = distributeHorizontal;
