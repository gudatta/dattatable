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
__exportStar(require("./common"), exports);
__exportStar(require("./dashboard"), exports);
__exportStar(require("./itemForm"), exports);
var common_1 = require("./common");
var dashboard_1 = require("./dashboard");
var itemForm_1 = require("./itemForm");
var DattaTable = {
    CanvasForm: common_1.CanvasForm,
    Dashboard: dashboard_1.Dashboard,
    ItemForm: itemForm_1.ItemForm,
    Modal: common_1.Modal
};
window["DattaTable"] = DattaTable;
exports.default = DattaTable;
