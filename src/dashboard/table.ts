import { Components } from "gd-sprest-bs";

// DataTables.net
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";

/**
 * Data Table
 */
export interface IDataTable {
    datatable: any;
    filter: (idx: number, value?: string) => void;
    refresh: (rows: any[]) => void;
    search: (value?: string) => void;
}

/**
 * Properties
 */
export interface IDataTableProps {
    columns: Components.ITableColumn[];
    dtProps?: any;
    el: HTMLElement;
    onRender?: (dt: any) => void;
    rows?: any[];
}

/**
 * Data Table
 */
export class DataTable implements IDataTable {
    private _datatable = null;
    private _props: IDataTableProps = null;

    // Constructor
    constructor(props: IDataTableProps) {
        // Save the properties
        this._props = props;

        // Render the table
        this.refresh(props.rows);
    }

    // Applies the datatables.net plugin
    private applyPlugin(table: Components.ITable) {
        // Render the datatable
        this._datatable = $(table.el).DataTable(this._props.dtProps);

        // Call the render event
        this._props.onRender ? this._props.onRender(this._datatable) : null;
    }

    /** Public Interface */

    // Datatables.net object
    get datatable(): any { return this._datatable; }

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

            // Add the rows
            rows ? this._datatable.add(rows) : null;

            // Redraw the table
            this._datatable.draw();
        } else {
            // Render the data table
            let table = Components.Table({
                el: this._props.el,
                rows,
                columns: this._props.columns
            });

            // Apply the plugin
            this.applyPlugin(table);
        }
    }

    // Searches the datatable
    search(value: string = "") {
        // Search the table
        this._datatable.search(value).draw();
    }
}