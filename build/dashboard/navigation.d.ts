import { Components } from "gd-sprest-bs";
/**
 * Navigation
 */
interface INavProps {
    el: HTMLElement;
    items: Components.INavbarItem[];
    itemsEnd: Components.INavbarItem[];
    onShowFilter: Function;
    onSearch: (value: string) => void;
    title: string;
}
/**
 * Navigation
 */
export declare class Navigation {
    private _props;
    constructor(props: INavProps);
    private render;
}
export {};
