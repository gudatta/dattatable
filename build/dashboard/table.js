"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
// DataTables.net
var $ = require("jquery");
require("datatables.net");
require("datatables.net-bs5");
require("../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css");
/**
 * Data Table
 */
var DataTable = /** @class */ (function () {
    // Constructor
    function DataTable(props) {
        this._columns = null;
        this._datatable = null;
        this._el = null;
        // Save the properties
        this._columns = props.columns;
        this._el = props.el;
        // Render the table
        this.refresh(props.rows);
    }
    // Applies the datatables.net plugin
    DataTable.prototype.applyPlugin = function (table) {
        // Set the datatable properties
        var dtProps = {
            dom: 'rt<"row"<"col-sm-4"l><"col-sm-4"i><"col-sm-4"p>>',
            "columnDefs": [
                {
                    "targets": 3,
                    "orderable": false,
                    "searchable": false
                }
            ]
        };
        // Render the datatable
        this._datatable = $(table.el).DataTable(dtProps);
    };
    /** Public Interface */
    // Filters the status
    DataTable.prototype.filter = function (idx, value) {
        if (value === void 0) { value = ""; }
        // Set the filter
        this._datatable.column(idx).search(value).draw();
    };
    // Method to reload the data
    DataTable.prototype.refresh = function (rows) {
        // See if the datatable exists
        if (this._datatable != null) {
            // Clear the datatable
            this._datatable.clear();
            this._datatable.destroy();
            this._datatable = null;
        }
        // Clear the datatable element
        while (this._el.firstChild) {
            this._el.removeChild(this._el.firstChild);
        }
        // Render the data table
        var table = gd_sprest_bs_1.Components.Table({
            el: this._el,
            rows: rows,
            columns: this._columns
        });
        // Apply the plugin
        this.applyPlugin(table);
    };
    // Searches the datatable
    DataTable.prototype.search = function (value) {
        if (value === void 0) { value = ""; }
        // Search the table
        this._datatable.search(value).draw();
    };
    return DataTable;
}());
exports.DataTable = DataTable;
