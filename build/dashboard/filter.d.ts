import { Components } from "gd-sprest-bs";
/**
 * Filter Item
 */
export interface IFilterItem {
    header: string;
    items: Components.ICheckboxGroupItem[];
    onFilter?: (value: string) => void;
}
/**
 * Filter Slideout
 */
export declare class FilterSlideout {
    private _cbs;
    private _el;
    private _filters;
    private _items;
    constructor(filters?: IFilterItem[]);
    private generateFilters;
    private generateItem;
    show(): void;
}
