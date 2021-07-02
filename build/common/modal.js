"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.ModalDialog = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
/**
 * Modal
 */
var ModalDialog = /** @class */ (function () {
    // Constructor
    function ModalDialog() {
        this._modal = null;
        this._elBody = null;
        this._elFooter = null;
        this._elHeader = null;
        this._onCloseEvent = null;
        // Render the canvas
        this.render();
    }
    // Hides the modal
    ModalDialog.prototype.hide = function () { this._modal.hide(); };
    // Renders the canvas
    ModalDialog.prototype.render = function () {
        var _this = this;
        // Create the element
        var el = document.createElement("div");
        el.id = "core-modal";
        document.body.appendChild(el);
        // Render the canvas
        this._modal = gd_sprest_bs_1.Components.Modal({
            el: el,
            isCentered: true,
            type: gd_sprest_bs_1.Components.ModalTypes.Large,
            options: {
                autoClose: false,
                backdrop: true,
                keyboard: true
            },
            onRenderBody: function (el) { _this._elBody = el; },
            onRenderFooter: function (el) { _this._elFooter = el; },
            onClose: function () {
                // Call the close event
                _this._onCloseEvent ? _this._onCloseEvent() : null;
            }
        });
        // Set the header
        this._elHeader = this._modal.el.querySelector(".modal-title");
        this._elHeader.classList.add("m-0");
    };
    // Sets the body
    ModalDialog.prototype.setBody = function (content) {
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
    // Sets the close event
    ModalDialog.prototype.setCloseEvent = function (event) { this._onCloseEvent = event; };
    // Sets the footer
    ModalDialog.prototype.setFooter = function (content) {
        // Clear the body
        while (this._elFooter.firstChild) {
            this._elFooter.removeChild(this._elFooter.firstChild);
        }
        // See if content exists
        if (content) {
            // See if this is text
            if (typeof (content) == "string") {
                // Set the html
                this._elFooter.innerHTML = content;
            }
            else {
                // Append the element
                this._elFooter.appendChild(content);
            }
        }
    };
    // Sets the header
    ModalDialog.prototype.setHeader = function (content) {
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
    ModalDialog.prototype.setType = function (type) { this._modal.setType(type); };
    // Shows the modal
    ModalDialog.prototype.show = function () { this._modal.show(); };
    return ModalDialog;
}());
exports.ModalDialog = ModalDialog;
exports.Modal = new ModalDialog();
