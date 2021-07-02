"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
/**
 * Footer
 */
var Footer = /** @class */ (function () {
    // Constructor
    function Footer(props) {
        this._props = null;
        // Save the properties
        this._props = props;
        // Render the footer
        this.render();
    }
    // Renders the component
    Footer.prototype.render = function () {
        // Render a navbar
        gd_sprest_bs_1.Components.Navbar({
            el: this._props.el,
            items: this._props.items,
            itemsEnd: this._props.itemsEnd
        });
    };
    return Footer;
}());
exports.Footer = Footer;
