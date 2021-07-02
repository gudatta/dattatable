import { Components } from "gd-sprest-bs";

// DataTables.net
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";
import "../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css"

/**
 * Data Table
 */
 export interface IDataTable {
    filter: (idx: number, value?: string) => void;
    refresh: (rows: any[]) => void;
    search: (value?: string) => void;
}

/**
 * Properties
 */
export interface IDataTableProps {
    columns: Components.ITableColumn[];
    el: HTMLElement;
    rows?: any[];
}

/**
 * Data Table
 */
export class DataTable implements IDataTable {
    private _columns: Components.ITableColumn[] = null;
    private _datatable = null;
    private _el: HTMLElement = null;

    // Constructor
    constructor(props: IDataTableProps) {
        // Save the properties
        this._columns = props.columns;
        this._el = props.el;

        // Render the table
        this.refresh(props.rows);
    }

    // Applies the datatables.net plugin
    private applyPlugin(table: Components.ITable) {
        // Set the datatable properties
        let dtProps: any = {
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
    }

    /** Public Interface */

    // Filters the status
    filter(idx: number, value: string = "") {
        // Set the filter
        this._datatable.column(idx).search(value).draw();
    }

    // Method to reload the data
    refresh(rows: any[]) {
        // See if the datatable exists
        if (this._datatable != null) {
            // Clear the datatable
            this._datatable.clear();
            this._datatable.destroy();
            this._datatable = null;
        }

        // Clear the datatable element
        while (this._el.firstChild) { this._el.removeChild(this._el.firstChild); }

        // Render the data table
        let table = Components.Table({
            el: this._el,
            rows,
            columns: this._columns
        });

        // Apply the plugin
        this.applyPlugin(table);
    }

    // Searches the datatable
    search(value: string = "") {
        // Search the table
        this._datatable.search(value).draw();
    }
}