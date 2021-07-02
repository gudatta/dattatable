import { Components } from "gd-sprest-bs";
import { IFilterItem } from "./filter";
export interface IDashboardProps {
    columns: Components.ITableColumn[];
    el: HTMLElement;
    footer?: {
        items?: Components.INavbarItem[];
        itemsEnd?: Components.INavbarItem[];
    };
    filters?: IFilterItem[];
    header?: {
        title?: string;
    };
    navigation?: {
        title?: string;
        items?: Components.INavbarItem[];
        itemsEnd?: Components.INavbarItem[];
    };
    rows?: any[];
}
/**
 * Dashboard
 */
export declare class Dashboard {
    private _dt;
    private _props;
    constructor(props: IDashboardProps);
    private render;
    /**
     * Public Interface
     */
    filter(idx: number, value?: string): void;
    refresh(rows: any[]): void;
    search(value?: string): void;
}
