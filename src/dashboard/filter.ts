import { Components } from "gd-sprest-bs";
import { CanvasForm } from "../common";

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
export class FilterSlideout {
    private _cbs: Array<Components.ICheckboxGroup> = null;
    private _el: HTMLElement = null;
    private _filters: IFilterItem[] = null;
    private _items: Array<Components.IAccordionItem> = null;

    constructor(filters: IFilterItem[] = []) {
        // Save the filters
        this._filters = filters;

        // Initialize the variables
        this._cbs = [];
        this._items = [];

        // Generate the items
        this.generateFilters();
    }

    // Generates the filters
    private generateFilters() {
        // Create the filters element
        this._el = document.createElement("div");

        // Render a clear button
        Components.Button({
            el: this._el,
            className: "mb-3",
            text: "Clear Filters",
            type: Components.ButtonTypes.OutlineDanger,
            onClick: () => {
                // Parse the filters
                for (let i = 0; i < this._cbs.length; i++) {
                    // Clear the filter
                    this._cbs[i].setValue("");
                }
            }
        });

        // Parse the filters
        for (let i = 0; i < this._filters.length; i++) {
            let filter = this._filters[i];

            // Add the filter
            this._items.push(this.generateItem(filter.header, filter.items, filter.onFilter));
        }

        // Default the first filter to be displayed
        this._items.length > 0 ? this._items[0].showFl = true : null;

        // Render an accordion
        Components.Accordion({
            el: this._el,
            items: this._items
        });
    }

    // Generates the navigation dropdown items
    private generateItem(text: string, items: Components.ICheckboxGroupItem[], onFilter: (value: string) => void) {
        // Create the item
        let item: Components.IAccordionItem = {
            header: text,
            onRender: el => {
                // Render the checkbox group
                this._cbs.push(Components.CheckboxGroup({
                    el,
                    items,
                    type: Components.CheckboxGroupTypes.Switch,
                    onChange: (item: Components.ICheckboxGroupItem) => {
                        // Execute the event
                        onFilter(item ? item.label : "");
                    }
                }));
            }
        };

        // Return the item
        return item;
    }

    // Shows the filters
    show() {
        // Set the header and body
        CanvasForm.setHeader("Filters");
        CanvasForm.setBody(this._el || "<p>Loading the Filters...</p>");

        // Show the filters
        CanvasForm.show();
    }
}