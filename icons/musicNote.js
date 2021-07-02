"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicNote = void 0;
var generate_1 = require("../generate");
function musicNote(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-music-note\" viewBox=\"0 0 16 16\">\n  <path d=\"M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z\"/>\n  <path fill-rule=\"evenodd\" d=\"M9 3v10H8V3h1z\"/>\n  <path d=\"M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z\"/>\n</svg>", height, width);
}
exports.musicNote = musicNote;
