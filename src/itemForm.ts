import { Components, Helper, SPTypes } from "gd-sprest-bs";
import { CanvasForm, LoadingDialog } from "./common";

/**
 * Item Form
 */
export class Form {
    private _displayForm: Components.IListFormDisplay = null;
    private _editForm: Components.IListFormEdit = null;
    private _updateEvent: Function = null;

    // The current form being displayed
    get form(): Components.IListFormDisplay | Components.IListFormEdit { return this._displayForm || this._editForm; }

    // List name
    private _listName: string = null;
    get ListName(): string { return this._listName; }
    set ListName(value: string) { this._listName = value; }

    /** Public Methods */

    // Creates a new task
    create(onUpdate?: Function) {
        // Set the update event
        this._updateEvent = onUpdate;

        // Load the item
        this.load(SPTypes.ControlMode.New);
    }

    // Edits a task
    edit(itemId: number, onUpdate?: () => void) {
        // Set the update event
        this._updateEvent = onUpdate;

        // Load the form
        this.load(SPTypes.ControlMode.Edit, itemId);
    }

    // Views the task
    view(itemId: number, onUpdate?: () => void) {
        // Set the update event
        this._updateEvent = onUpdate;

        // Load the form
        this.load(SPTypes.ControlMode.Display, itemId);
    }

    /** Private Methods */

    // Load the form information
    private load(mode: number, itemId?: number) {
        // Clear the forms
        this._displayForm = null;
        this._editForm = null;

        // Show a loading dialog
        LoadingDialog.setHeader("Loading the Item");
        LoadingDialog.setBody("This will close after the form is loaded...");
        LoadingDialog.show();

        // Load the form information
        Helper.ListForm.create({
            listName: this.ListName,
            itemId
        }).then(info => {
            // Set the header
            CanvasForm.setHeader("<h5>" + (info.item ? info.item.Title : "Create Item") + "</h5>");

            // Render the form based on the type
            if (mode == SPTypes.ControlMode.Display) {
                // Render the display form
                this._displayForm = Components.ListForm.renderDisplayForm({
                    info,
                    rowClassName: "mb-3"
                });

                // Update the body
                CanvasForm.setBody(this._displayForm.el);
            } else {
                let isNew = mode == SPTypes.ControlMode.New;
                let el = document.createElement("div");

                // Render the edit form
                this._editForm = Components.ListForm.renderEditForm({
                    el,
                    info,
                    rowClassName: "mb-3",
                    controlMode: isNew ? SPTypes.ControlMode.New : SPTypes.ControlMode.Edit
                });

                // Render the save button
                let elButton = document.createElement("div");
                elButton.classList.add("float-end");
                elButton.classList.add("mt-3");
                el.appendChild(elButton);
                Components.Button({
                    el: elButton,
                    text: isNew ? "Create" : "Update",
                    type: Components.ButtonTypes.OutlineSuccess,
                    onClick: () => { this.save(this._editForm, isNew); }
                });

                // Update the body
                CanvasForm.setBody(el);
            }

            // Close the dialog
            LoadingDialog.hide();

            // Show the form
            CanvasForm.show();
        });
    }

    // Saves the form
    private save(form: Components.IListFormEdit, isNew: boolean) {
        // Display a loading dialog
        LoadingDialog.setHeader("Saving the Item");
        LoadingDialog.setBody("Validating the form...");
        LoadingDialog.show();

        // Validate the form
        if (form.isValid()) {
            // Update the title
            LoadingDialog.setBody((isNew ? "Creating" : "Updating") + " the Item");

            // Save the item
            form.save().then(item => {
                // Call the update event
                this._updateEvent ? this._updateEvent() : null;

                // Close the dialogs
                CanvasForm.hide();
                LoadingDialog.hide();
            });
        } else {
            // Close the dialog
            LoadingDialog.hide();
        }
    }
}
export const ItemForm = new Form();