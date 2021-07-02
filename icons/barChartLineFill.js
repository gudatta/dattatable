"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barChartLineFill = void 0;
var generate_1 = require("../generate");
function barChartLineFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bar-chart-line-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z\"/>\n</svg>", height, width);
}
exports.barChartLineFill = barChartLineFill;
