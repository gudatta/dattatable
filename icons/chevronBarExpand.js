"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chevronBarExpand = void 0;
var generate_1 = require("../generate");
function chevronBarExpand(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-bar-expand\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z\"/>\n</svg>", height, width);
}
exports.chevronBarExpand = chevronBarExpand;
