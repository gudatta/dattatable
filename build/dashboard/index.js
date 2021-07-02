"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
var filter_1 = require("./filter");
var footer_1 = require("./footer");
var header_1 = require("./header");
var navigation_1 = require("./navigation");
var table_1 = require("./table");
/**
 * Dashboard
 */
var Dashboard = /** @class */ (function () {
    // Constructor
    function Dashboard(props) {
        this._dt = null;
        this._props = null;
        // Set the properties
        this._props = props;
        // Render the dashboard
        this.render();
    }
    // Renders the component
    Dashboard.prototype.render = function () {
        var _this = this;
        // Create the filters
        var filters = new filter_1.FilterSlideout(this._props.filters);
        // Render the template
        this._props.el.innerHTML = "\n        <div class=\"dashboard\">\n            <div class=\"row\">\n                <div id=\"navigation\" class=\"col\"></div>\n            </div>\n            <div class=\"row\">\n                <div id=\"header\" class=\"col\"></div>\n            </div>\n            <div class=\"row\">\n                <div id=\"datatable\" class=\"col\"></div>\n            </div>\n            <div class=\"row\">\n                <div id=\"footer\" class=\"col\"></div>\n            </div>\n        </div>";
        // Render the header
        var header = this._props.header || {};
        new header_1.Header({
            el: this._props.el.querySelector("#header"),
            title: header.title
        });
        // Render the navigation
        var navigation = this._props.navigation || {};
        new navigation_1.Navigation({
            el: this._props.el.querySelector("#navigation"),
            items: navigation.items,
            itemsEnd: navigation.itemsEnd,
            title: navigation.title,
            onSearch: function (value) {
                // Search the data table
                _this._dt.search(value);
            },
            onShowFilter: function () {
                // Show the filter
                filters.show();
            },
        });
        // Render the data table
        this._dt = new table_1.DataTable({
            columns: this._props.columns,
            el: this._props.el.querySelector("#datatable"),
            rows: this._props.rows
        });
        // Render the footer
        var footer = this._props.footer || {};
        new footer_1.Footer({
            el: this._props.el.querySelector("#footer"),
            items: footer.items,
            itemsEnd: footer.itemsEnd
        });
    };
    /**
     * Public Interface
     */
    // Filter the table
    Dashboard.prototype.filter = function (idx, value) {
        // Filter the table
        this._dt.filter(idx, value);
    };
    // Refresh the table
    Dashboard.prototype.refresh = function (rows) {
        // Refresh the table
        this._dt.refresh(rows);
    };
    // Search the table
    Dashboard.prototype.search = function (value) {
        // Search the table
        this._dt.search(value);
    };
    return Dashboard;
}());
exports.Dashboard = Dashboard;
