"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeItalic = void 0;
var generate_1 = require("./generate");
function typeItalic(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-type-italic\" viewBox=\"0 0 16 16\">\n  <path d=\"M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z\"/>\n</svg>", height, width);
}
exports.typeItalic = typeItalic;
