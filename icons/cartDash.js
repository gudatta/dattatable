"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartDash = void 0;
var generate_1 = require("../generate");
function cartDash(height, width) {
    return generate_1.generateIcon("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-cart-dash\" viewBox=\"0 0 16 16\">\n  <path d=\"M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z\"/>\n  <path d=\"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"/>\n</svg>", height, width);
}
exports.cartDash = cartDash;
