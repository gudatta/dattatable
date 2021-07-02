import { Components, Helper, SPTypes } from "gd-sprest-bs";
import { CanvasForm, LoadingDialog } from "./common";

/**
 * Item Form
 */
class _ItemForm {
    private _displayForm: Components.IListFormDisplay = null;
    private _editForm: Components.IListFormEdit = null;
    private _onCreateEditForm: (props: Components.IListFormEditProps) => Components.IListFormEditProps;
    private _onCreateViewForm: (props: Components.IListFormDisplayProps) => Components.IListFormDisplayProps;
    private _onSave: (values: any) => any;
    private _updateEvent: Function = null;

    // The current form being displayed
    get form(): Components.IListFormDisplay | Components.IListFormEdit { return this._displayForm || this._editForm; }

    // List name
    private _listName: string = null;
    get ListName(): string { return this._listName; }
    set ListName(value: string) { this._listName = value; }

    /** Public Methods */

    // Creates a new task
    create(props?: {
        onCreateEditForm?: (props: Components.IListFormEditProps) => Components.IListFormEditProps,
        onSave?: (values: any) => any,
        onUpdate?: (item: any) => any
    }) {
        // Set the events
        this._onCreateEditForm = props.onCreateEditForm;
        this._onSave = props.onSave;
        this._updateEvent = props.onUpdate;

        // Load the item
        this.load(SPTypes.ControlMode.New);
    }

    // Edits a task
    edit(props: {
        itemId: number,
        onCreateEditForm?: (props: Components.IListFormEditProps) => Components.IListFormEditProps,
        onSave?: (values: any) => any,
        onUpdate?: (item: any) => any
    }) {
        // Set the events
        this._onCreateEditForm = props.onCreateEditForm;
        this._onSave = props.onSave;
        this._updateEvent = props.onUpdate;

        // Load the form
        this.load(SPTypes.ControlMode.Edit, props.itemId);
    }

    // Views the task
    view(props: {
        itemId: number,
        onCreateViewForm?: (props: Components.IListFormDisplayProps) => Components.IListFormDisplayProps
    }) {
        // Set the events
        this._onCreateViewForm = props.onCreateViewForm;

        // Load the form
        this.load(SPTypes.ControlMode.Display, props.itemId);
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
                let props: Components.IListFormDisplayProps = {
                    info,
                    rowClassName: "mb-3"
                };

                // Call the event if it exists
                props = this._onCreateViewForm ? this._onCreateViewForm(props) : props;

                // Render the display form
                this._displayForm = Components.ListForm.renderDisplayForm(props);

                // Update the body
                CanvasForm.setBody(this._displayForm.el);
            } else {
                let isNew = mode == SPTypes.ControlMode.New;
                let el = document.createElement("div");
                let props: Components.IListFormEditProps = {
                    el,
                    info,
                    rowClassName: "mb-3",
                    controlMode: isNew ? SPTypes.ControlMode.New : SPTypes.ControlMode.Edit
                };

                // Call the event if it exists
                props = this._onCreateEditForm ? this._onCreateEditForm(props) : props;

                // Render the edit form
                this._editForm = Components.ListForm.renderEditForm(props);

                // Render the save button
                let elButton = document.createElement("div");
                elButton.classList.add("float-end");
                elButton.classList.add("mt-3");
                el.appendChild(elButton);
                Components.Button({
                    el: elButton,
                    text: isNew ? "Create" : "Update",
                    type: Components.ButtonTypes.OutlineSuccess,
                    onClick: () => { this.save(this._editForm, info, isNew); }
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
    private save(form: Components.IListFormEdit, info: Helper.IListFormResult, isNew: boolean) {
        // Display a loading dialog
        LoadingDialog.setHeader("Saving the Item");
        LoadingDialog.setBody("Validating the form...");
        LoadingDialog.show();

        // Validate the form
        if (form.isValid()) {
            // Update the title
            LoadingDialog.setBody((isNew ? "Creating" : "Updating") + " the Item");

            // Call the save event
            let values = form.getValues();
            values = this._onSave ? this._onSave(values) : values;

            // Save the item
            Components.ListForm.saveItem(info, values).then(item => {
                // Call the update event
                this._updateEvent ? this._updateEvent(item) : null;

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
export const ItemForm = new _ItemForm();