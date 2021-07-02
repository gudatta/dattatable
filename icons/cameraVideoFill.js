"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cameraVideoFill = void 0;
var generate_1 = require("../generate");
function cameraVideoFill(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-camera-video-fill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z\"/>\n</svg>", height, width);
}
exports.cameraVideoFill = cameraVideoFill;
