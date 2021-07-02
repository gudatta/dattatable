"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablet = void 0;
var generate_1 = require("./generate");
function tablet(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-tablet\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z\"/>\n  <path d=\"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n</svg>", height, width);
}
exports.tablet = tablet;
