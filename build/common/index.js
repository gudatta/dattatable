"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTimeValue = exports.formatDateValue = void 0;
var moment = require("moment");
/** Libraries */
__exportStar(require("./canvas"), exports);
__exportStar(require("./modal"), exports);
/** Methods */
// Formats the date/time value
exports.formatDateValue = function (value) {
    // Ensure a value exists
    if (value) {
        // Return the date value
        return moment(value).format("MM/DD/YYYY");
    }
    // Return nothing
    return "";
};
// Formats the date value to include time 
exports.formatDateTimeValue = function (value) {
    // Ensure a value exists
    if (value) {
        // Return the date and military time value
        return moment(value).format('MM/DD/YYYY HHmm');
    }
    // Return nothing
    return "";
};
