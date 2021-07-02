"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclamationSquareFill = void 0;
var generate_1 = require("./generate");
function exclamationSquareFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-square-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"/>\n</svg>", height, width);
}
exports.exclamationSquareFill = exclamationSquareFill;
