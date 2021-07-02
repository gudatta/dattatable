"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIcon = void 0;
// Generates the html for an icon
exports.generateIcon = function (svg, height, width) {
    if (height === void 0) { height = 32; }
    if (width === void 0) { width = 32; }
    // Get the icon element
    var elDiv = document.createElement("div");
    elDiv.innerHTML = svg;
    var icon = elDiv.firstChild;
    if (icon) {
        // Set the height/width
        icon.setAttribute("height", (height ? height : 32).toString());
        icon.setAttribute("width", (width ? width : 32).toString());
        // Update the styling
        icon.style.pointerEvents = "none";
        // Support for IE
        icon.setAttribute("focusable", "false");
    }
    // Return the icon
    return icon;
};
