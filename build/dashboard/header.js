"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
/**
 * Header
 */
var Header = /** @class */ (function () {
    // Constructor
    function Header(props) {
        this._props = null;
        // Save the properties
        this._props = props;
        // Render the header
        this.render();
    }
    // Renders the component
    Header.prototype.render = function () {
        // Render a jumbotron
        gd_sprest_bs_1.Components.Jumbotron({
            el: this._props.el,
            className: "header",
            lead: this._props.title
        });
    };
    return Header;
}());
exports.Header = Header;
