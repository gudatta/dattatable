"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ladder = void 0;
var generate_1 = require("./generate");
function ladder(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-ladder\" viewBox=\"0 0 16 16\">\n  <path d=\"M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z\"/>\n</svg>", height, width);
}
exports.ladder = ladder;
