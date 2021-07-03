import { Components } from "gd-sprest-bs";
import { FilterSlideout, IFilterItem } from "./filter";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";
import { DataTable, IDataTable } from "./table";

// Export the components
export * from "./filter";
export * from "./footer";
export * from "./header";
export * from "./navigation";
export * from "./table";

// Dashboard
export interface IDashboardProps {
    columns: Components.ITableColumn[];
    dtProps?: any;
    el: HTMLElement;
    footer?: {
        items?: Components.INavbarItem[];
        itemsEnd?: Components.INavbarItem[];
    };
    filters?: IFilterItem[];
    header?: {
        title?: string;
    }
    navigation?: {
        title?: string | HTMLElement;
        items?: Components.INavbarItem[];
        itemsEnd?: Components.INavbarItem[];
    };
    onRender?: (dt: any) => void;
    rows?: any[];
}

/**
 * Dashboard
 */
export class Dashboard {
    private _dt: IDataTable = null;
    private _props: IDashboardProps = null;

    // Constructor
    constructor(props: IDashboardProps) {
        // Set the properties
        this._props = props;

        // Render the dashboard
        this.render();
    }

    // Renders the component
    private render() {
        // Create the filters
        let filters = new FilterSlideout(this._props.filters);

        // Render the template
        this._props.el.innerHTML = `
        <div class="dashboard">
            <div class="row">
                <div id="navigation" class="col"></div>
            </div>
            <div class="row">
                <div id="header" class="col"></div>
            </div>
            <div class="row">
                <div id="datatable" class="col"></div>
            </div>
            <div class="row">
                <div id="footer" class="col"></div>
            </div>
        </div>`;

        // Render the header
        let header = this._props.header || {};
        new Header({
            el: this._props.el.querySelector("#header"),
            title: header.title
        });

        // Render the navigation
        let navigation = this._props.navigation || {};
        new Navigation({
            el: this._props.el.querySelector("#navigation"),
            items: navigation.items,
            itemsEnd: navigation.itemsEnd,
            title: navigation.title,
            onSearch: value => {
                // Search the data table
                this._dt.search(value);
            },
            onShowFilter: () => {
                // Show the filter
                filters.show();
            },
        });

        // Render the data table
        this._dt = new DataTable({
            columns: this._props.columns,
            dtProps: this._props.dtProps,
            el: this._props.el.querySelector("#datatable"),
            onRender: this._props.onRender,
            rows: this._props.rows
        });

        // Render the footer
        let footer = this._props.footer || {};
        new Footer({
            el: this._props.el.querySelector("#footer"),
            items: footer.items,
            itemsEnd: footer.itemsEnd
        });
    }

    /**
     * Public Interface
     */

    // Filter the table
    filter(idx: number, value?: string) {
        // Filter the table
        this._dt.filter(idx, value);
    }

    // Refresh the table
    refresh(rows: any[]) {
        // Refresh the table
        this._dt.refresh(rows);
    }

    // Search the table
    search(value?: string) {
        // Search the table
        this._dt.search(value);
    }
}