"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasForm = exports.Canvas = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
/**
 * Canvas Form
 */
var Canvas = /** @class */ (function () {
    // Constructor
    function Canvas() {
        this._canvas = null;
        this._elBody = null;
        this._elHeader = null;
        // Render the canvas
        this.render();
    }
    Object.defineProperty(Canvas.prototype, "el", {
        // Element
        get: function () { return this._canvas.el; },
        enumerable: false,
        configurable: true
    });
    // Hides the canvas
    Canvas.prototype.hide = function () { this._canvas.hide(); };
    // Renders the canvas
    Canvas.prototype.render = function () {
        var _this = this;
        // Create the element
        var el = document.createElement("div");
        el.id = "core-canvas";
        document.body.appendChild(el);
        // Render the canvas
        this._canvas = gd_sprest_bs_1.Components.Offcanvas({
            el: el,
            options: {
                autoClose: true,
                backdrop: true,
                focus: true,
                keyboard: true,
                scroll: true
            },
            onRenderBody: function (el) { _this._elBody = el; },
            onRenderHeader: function (el) { _this._elHeader = el; }
        });
    };
    // Sets the body
    Canvas.prototype.setBody = function (content) {
        // Clear the body
        while (this._elBody.firstChild) {
            this._elBody.removeChild(this._elBody.firstChild);
        }
        // See if content exists
        if (content) {
            // See if this is text
            if (typeof (content) == "string") {
                // Set the html
                this._elBody.innerHTML = content;
            }
            else {
                // Append the element
                this._elBody.appendChild(content);
            }
        }
    };
    // Sets the header
    Canvas.prototype.setHeader = function (content) {
        // Clear the body
        while (this._elHeader.firstChild) {
            this._elHeader.removeChild(this._elHeader.firstChild);
        }
        // See if content exists
        if (content) {
            // See if this is text
            if (typeof (content) == "string") {
                // Set the html
                this._elHeader.innerHTML = content;
            }
            else {
                // Append the element
                this._elHeader.appendChild(content);
            }
        }
    };
    // Sets the modal type
    Canvas.prototype.setType = function (type) { this._canvas.setType(type); };
    // Shows the canvas
    Canvas.prototype.show = function () { this._canvas.show(); };
    return Canvas;
}());
exports.Canvas = Canvas;
exports.CanvasForm = new Canvas();
