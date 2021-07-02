"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
var generate_1 = require("../generate");
function columns(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-columns\" viewBox=\"0 0 16 16\">\n  <path d=\"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z\"/>\n</svg>", height, width);
}
exports.columns = columns;
