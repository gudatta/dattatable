import { Components } from "gd-sprest-bs";

/**
 * Loading Dialog
 */
export class LoadingDialogModal {
    private _el: HTMLElement = null;
    private _elBody: HTMLElement = null;
    private _elBackdrop: HTMLElement = null;
    private _elHeader: HTMLElement = null;

    // Constructor
    constructor() {
        // Render the canvas
        this.render();
    }

    // Element
    get el(): HTMLElement { return this._el; }

    // Hides the canvas
    hide() {
        // Update the display
        this._el.style.display = "none";
        this._elBackdrop.style.display = "none";
    }

    // Renders the canvas
    private render() {
        // Create the backdrop element
        this._elBackdrop = document.createElement("div");
        this._elBackdrop.id = "loading-dialog-backdrop";
        this._elBackdrop.style.backgroundColor = "#000";
        this._elBackdrop.style.display = "none";
        this._elBackdrop.style.height = "100vh";
        this._elBackdrop.style.left = "0";
        this._elBackdrop.style.opacity = "0.5";
        this._elBackdrop.style.position = "fixed";
        this._elBackdrop.style.top = "0";
        this._elBackdrop.style.width = "100vw";
        this._elBackdrop.style.zIndex = "2000";
        document.body.appendChild(this._elBackdrop);

        // Create the loading dialog element
        this._el = document.createElement("div");
        this._el.id = "loading-dialog";
        this._el.classList.add("bs");
        this._el.style.display = "none";
        this._el.style.height = "100vh";
        this._el.style.left = "0";
        this._el.style.position = "fixed";
        this._el.style.top = "0";
        this._el.style.width = "100vw";
        this._el.style.zIndex = "2010";
        this._el.innerHTML = "<div></div>";
        document.body.appendChild(this._el);

        // Update the main element
        let elMain = this._el.firstChild as HTMLElement;
        elMain.classList.add("d-flex");
        elMain.classList.add("flex-column");
        elMain.classList.add("align-items-center");
        elMain.style.backgroundColor = "#FFF";
        elMain.style.marginLeft = "30vw";
        elMain.style.marginTop = "30vh";
        elMain.style.height = "40vh";
        elMain.style.width = "40vw";

        // Append the header
        this._elHeader = document.createElement("div");
        this._elHeader.classList.add("text-center");
        this._elHeader.classList.add("fs-2");
        this._elHeader.classList.add("m-2");
        this._elHeader.classList.add("p-2");
        elMain.appendChild(this._elHeader);

        // Render a spinner
        Components.Spinner({
            el: elMain,
            type: Components.SpinnerTypes.Primary
        });

        // Append the body
        this._elBody = document.createElement("div");
        this._elBody.classList.add("fs-4");
        this._elBody.classList.add("px-2");
        this._elBody.classList.add("w-100");
        elMain.appendChild(this._elBody);
    }

    // Sets the body
    setBody(content) {
        // Clear the body
        while (this._elBody.firstChild) { this._elBody.removeChild(this._elBody.firstChild); }

        // See if content exists
        if (content) {
            // See if this is text
            if (typeof (content) == "string") {
                // Set the html
                this._elBody.innerHTML = content;
            } else {
                // Append the element
                this._elBody.appendChild(content);
            }
        }
    }

    // Sets the header
    setHeader(content) {
        // Clear the body
        while (this._elHeader.firstChild) { this._elHeader.removeChild(this._elHeader.firstChild); }

        // See if content exists
        if (content) {
            // See if this is text
            if (typeof (content) == "string") {
                // Set the html
                this._elHeader.innerHTML = content;
            } else {
                // Append the element
                this._elHeader.appendChild(content);
            }
        }
    }

    // Shows the canvas
    show() {
        // Update the display
        this._el.style.display = "";
        this._elBackdrop.style.display = "";
    }
}
export const LoadingDialog = new LoadingDialogModal();