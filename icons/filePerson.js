"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filePerson = void 0;
var generate_1 = require("../generate");
function filePerson(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-person\" viewBox=\"0 0 16 16\">\n  <path d=\"M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z\"/>\n  <path d=\"M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n</svg>", height, width);
}
exports.filePerson = filePerson;
