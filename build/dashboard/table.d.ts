import { Components } from "gd-sprest-bs";
import "datatables.net";
import "datatables.net-bs5";
import "../../node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css";
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
export declare class DataTable implements IDataTable {
    private _columns;
    private _datatable;
    private _el;
    constructor(props: IDataTableProps);
    private applyPlugin;
    /** Public Interface */
    filter(idx: number, value?: string): void;
    refresh(rows: any[]): void;
    search(value?: string): void;
}
