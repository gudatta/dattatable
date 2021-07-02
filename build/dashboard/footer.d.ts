import { Components } from "gd-sprest-bs";
/**
 * Footer
 */
export interface IFooterProps {
    el: HTMLElement;
    items?: Components.INavbarItem[];
    itemsEnd?: Components.INavbarItem[];
}
/**
 * Footer
 */
export declare class Footer {
    private _props;
    constructor(props: IFooterProps);
    private render;
}
