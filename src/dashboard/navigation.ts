import { Components } from "gd-sprest-bs";
import { filterSquare } from "gd-sprest-bs/build/icons/svgs/filterSquare";

/**
 * Navigation
 */
 interface INavProps {
    el: HTMLElement;
    items: Components.INavbarItem[];
    itemsEnd: Components.INavbarItem[];
    onShowFilter: Function;
    onSearch: (value: string) => void;
    title: string | HTMLElement;
}

/**
 * Navigation
 */
export class Navigation {
    private _props: INavProps = null;

    // Constructor
    constructor(props: INavProps) {
        // Save the properties
        this._props = props;

        // Render the navigation
        this.render();
    }

    // Renders the component
    private render() {
        // Render a navbar
        let nav = Components.Navbar({
            el: this._props.el,
            brand: this._props.title,
            className: "header",
            items: this._props.items,
            itemsEnd: this._props.itemsEnd,
            searchBox: {
                hideButton: true,
                onChange: this._props.onSearch,
                onSearch: this._props.onSearch
            }
        });

        // Render the filter icon
        let icon = document.createElement("div");
        icon.classList.add("filter-icon");
        icon.classList.add("nav-link");
        icon.classList.add("text-dark");
        icon.style.cursor = "pointer";
        icon.appendChild(filterSquare());
        icon.addEventListener("click", this._props.onShowFilter as any);
        nav.el.firstElementChild.appendChild(icon);
    }
}