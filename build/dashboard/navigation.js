"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
var filterSquare_1 = require("gd-sprest-bs/build/icons/svgs/filterSquare");
/**
 * Navigation
 */
var Navigation = /** @class */ (function () {
    // Constructor
    function Navigation(props) {
        this._props = null;
        // Save the properties
        this._props = props;
        // Render the navigation
        this.render();
    }
    // Renders the component
    Navigation.prototype.render = function () {
        // Render a navbar
        var nav = gd_sprest_bs_1.Components.Navbar({
            el: this._props.el,
            brand: this._props.title,
            className: "header",
            items: this._props.items,
            itemsEnd: this._props.itemsEnd,
            searchBox: {
                hideButton: true,
                onChange: this._props.onSearch,
                onSearch: this._props.onSearch
            }
        });
        // Render the filter icon
        var icon = document.createElement("div");
        icon.classList.add("filter-icon");
        icon.classList.add("nav-link");
        icon.classList.add("text-dark");
        icon.style.cursor = "pointer";
        icon.appendChild(filterSquare_1.filterSquare());
        icon.addEventListener("click", this._props.onShowFilter);
        nav.el.firstElementChild.appendChild(icon);
    };
    return Navigation;
}());
exports.Navigation = Navigation;
