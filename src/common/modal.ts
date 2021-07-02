import { Components } from "gd-sprest-bs";

/**
 * Modal
 */
class _Modal {
    private _modal: Components.IModal = null;
    private _elBody: HTMLElement = null;
    private _elFooter: HTMLElement = null;
    private _elHeader: HTMLElement = null;
    private _onCloseEvent: Function = null;

    // Constructor
    constructor() {
        // Render the canvas
        this.render();
    }

    // Hides the modal
    hide() { this._modal.hide(); }

    // Renders the canvas
    private render() {
        // Create the element
        let el = document.createElement("div");
        el.id = "core-modal";
        document.body.appendChild(el);

        // Render the canvas
        this._modal = Components.Modal({
            el,
            isCentered: true,
            type: Components.ModalTypes.Large,
            options: {
                autoClose: false,
                backdrop: true,
                keyboard: true
            },
            onRenderBody: el => { this._elBody = el; },
            onRenderFooter: el => { this._elFooter = el; },
            onClose: () => {
                // Call the close event
                this._onCloseEvent ? this._onCloseEvent() : null;
            }
        });

        // Set the header
        this._elHeader = this._modal.el.querySelector(".modal-title");
        this._elHeader.classList.add("m-0");
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

    // Sets the close event
    setCloseEvent(event) { this._onCloseEvent = event; }

    // Sets the footer
    setFooter(content) {
        // Clear the body
        while (this._elFooter.firstChild) { this._elFooter.removeChild(this._elFooter.firstChild); }

        // See if content exists
        if (content) {
            // See if this is text
            if (typeof (content) == "string") {
                // Set the html
                this._elFooter.innerHTML = content;
            } else {
                // Append the element
                this._elFooter.appendChild(content);
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

    // Sets the modal type
    setType(type) { this._modal.setType(type); }

    // Shows the modal
    show() { this._modal.show(); }
}
export const Modal = new _Modal();