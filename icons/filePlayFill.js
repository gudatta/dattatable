"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filePlayFill = void 0;
var generate_1 = require("./generate");
function filePlayFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-play-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z\"/>\n</svg>", height, width);
}
exports.filePlayFill = filePlayFill;
