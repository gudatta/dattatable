"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterSlideout = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
var common_1 = require("../common");
/**
 * Filter Slideout
 */
var FilterSlideout = /** @class */ (function () {
    function FilterSlideout(filters) {
        if (filters === void 0) { filters = []; }
        this._cbs = null;
        this._el = null;
        this._filters = null;
        this._items = null;
        // Save the filters
        this._filters = filters;
        // Initialize the variables
        this._cbs = [];
        this._items = [];
        // Generate the items
        this.generateFilters();
    }
    // Generates the filters
    FilterSlideout.prototype.generateFilters = function () {
        var _this = this;
        // Create the filters element
        this._el = document.createElement("div");
        // Render a clear button
        gd_sprest_bs_1.Components.Button({
            el: this._el,
            className: "mb-3",
            text: "Clear Filters",
            type: gd_sprest_bs_1.Components.ButtonTypes.OutlineDanger,
            onClick: function () {
                // Parse the filters
                for (var i = 0; i < _this._cbs.length; i++) {
                    // Clear the filter
                    _this._cbs[i].setValue("");
                }
            }
        });
        // Parse the filters
        for (var i = 0; i < this._filters.length; i++) {
            var filter = this._filters[i];
            // Add the filter
            this._items.push(this.generateItem(filter.header, filter.items, filter.onFilter));
        }
        // Default the first filter to be displayed
        this._items.length > 0 ? this._items[0].showFl = true : null;
        // Render an accordion
        gd_sprest_bs_1.Components.Accordion({
            el: this._el,
            items: this._items
        });
    };
    // Generates the navigation dropdown items
    FilterSlideout.prototype.generateItem = function (text, items, onFilter) {
        var _this = this;
        // Create the item
        var item = {
            header: text,
            onRender: function (el) {
                // Render the checkbox group
                _this._cbs.push(gd_sprest_bs_1.Components.CheckboxGroup({
                    el: el,
                    items: items,
                    onChange: function (item) {
                        // Execute the event
                        onFilter(item ? item.label : "");
                    }
                }));
            }
        };
        // Return the item
        return item;
    };
    // Shows the filters
    FilterSlideout.prototype.show = function () {
        // Set the header and body
        common_1.CanvasForm.setHeader("Filters");
        common_1.CanvasForm.setBody(this._el || "<p>Loading the Filters...</p>");
        // Show the filters
        common_1.CanvasForm.show();
    };
    return FilterSlideout;
}());
exports.FilterSlideout = FilterSlideout;
