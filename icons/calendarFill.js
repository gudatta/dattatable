"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarFill = void 0;
var generate_1 = require("../generate");
function calendarFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-calendar-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z\"/>\n</svg>", height, width);
}
exports.calendarFill = calendarFill;
