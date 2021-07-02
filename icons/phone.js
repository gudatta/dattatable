"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone = void 0;
var generate_1 = require("./generate");
function phone(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-phone\" viewBox=\"0 0 16 16\">\n  <path d=\"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z\"/>\n  <path d=\"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n</svg>", height, width);
}
exports.phone = phone;
