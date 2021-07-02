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
export class Footer {
    private _props: IFooterProps = null;

    // Constructor
    constructor(props: IFooterProps) {
        // Save the properties
        this._props = props;

        // Render the footer
        this.render();
    }

    // Renders the component
    private render() {
        // Render a navbar
        Components.Navbar({
            el: this._props.el,
            items: this._props.items,
            itemsEnd: this._props.itemsEnd
        });
    }
}