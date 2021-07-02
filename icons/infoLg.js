"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoLg = void 0;
var generate_1 = require("../generate");
function infoLg(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-info-lg\" viewBox=\"0 0 16 16\">\n  <path d=\"m10.277 5.433-4.031.505-.145.67.794.145c.516.123.619.309.505.824L6.101 13.68c-.34 1.578.186 2.32 1.423 2.32.959 0 2.072-.443 2.577-1.052l.155-.732c-.35.31-.866.434-1.206.434-.485 0-.66-.34-.536-.939l1.763-8.278zm.122-3.673a1.76 1.76 0 1 1-3.52 0 1.76 1.76 0 0 1 3.52 0z\"/>\n</svg>", height, width);
}
exports.infoLg = infoLg;
