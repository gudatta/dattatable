"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personDashFill = void 0;
var generate_1 = require("../generate");
function personDashFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-person-dash-fill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z\"/>\n  <path d=\"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n</svg>", height, width);
}
exports.personDashFill = personDashFill;
