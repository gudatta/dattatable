"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cone = void 0;
var generate_1 = require("./generate");
function cone(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-cone\" viewBox=\"0 0 16 16\">\n  <path d=\"M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125L7.03 1.88z\"/>\n</svg>", height, width);
}
exports.cone = cone;
