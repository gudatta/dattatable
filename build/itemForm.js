"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemForm = exports.Form = void 0;
var gd_sprest_bs_1 = require("gd-sprest-bs");
var common_1 = require("./common");
/**
 * Item Form
 */
var Form = /** @class */ (function () {
    function Form() {
        this._displayForm = null;
        this._editForm = null;
        this._updateEvent = null;
        // List name
        this._listName = null;
    }
    Object.defineProperty(Form.prototype, "form", {
        // The current form being displayed
        get: function () { return this._displayForm || this._editForm; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "ListName", {
        get: function () { return this._listName; },
        set: function (value) { this._listName = value; },
        enumerable: false,
        configurable: true
    });
    /** Public Methods */
    // Creates a new task
    Form.prototype.create = function (onUpdate) {
        // Set the update event
        this._updateEvent = onUpdate;
        // Load the item
        this.load(gd_sprest_bs_1.SPTypes.ControlMode.New);
    };
    // Edits a task
    Form.prototype.edit = function (itemId, onUpdate) {
        // Set the update event
        this._updateEvent = onUpdate;
        // Load the form
        this.load(gd_sprest_bs_1.SPTypes.ControlMode.Edit, itemId);
    };
    // Views the task
    Form.prototype.view = function (itemId, onUpdate) {
        // Set the update event
        this._updateEvent = onUpdate;
        // Load the form
        this.load(gd_sprest_bs_1.SPTypes.ControlMode.Display, itemId);
    };
    /** Private Methods */
    // Load the form information
    Form.prototype.load = function (mode, itemId) {
        var _this = this;
        // Clear the forms
        this._displayForm = null;
        this._editForm = null;
        // Show a loading dialog
        gd_sprest_bs_1.Helper.SP.ModalDialog.showWaitScreenWithNoClose("Loading the Item").then(function (dlg) {
            // Load the form information
            gd_sprest_bs_1.Helper.ListForm.create({
                listName: _this.ListName,
                itemId: itemId
            }).then(function (info) {
                // Set the header
                common_1.CanvasForm.setHeader("<h5>" + (info.item ? info.item.Title : "Create Item") + "</h5>");
                // Render the form based on the type
                if (mode == gd_sprest_bs_1.SPTypes.ControlMode.Display) {
                    // Render the display form
                    _this._displayForm = gd_sprest_bs_1.Components.ListForm.renderDisplayForm({
                        info: info,
                        rowClassName: "mb-3"
                    });
                    // Update the body
                    common_1.CanvasForm.setBody(_this._displayForm.el);
                }
                else {
                    var isNew_1 = mode == gd_sprest_bs_1.SPTypes.ControlMode.New;
                    var el = document.createElement("div");
                    // Render the edit form
                    _this._editForm = gd_sprest_bs_1.Components.ListForm.renderEditForm({
                        el: el,
                        info: info,
                        rowClassName: "mb-3",
                        controlMode: isNew_1 ? gd_sprest_bs_1.SPTypes.ControlMode.New : gd_sprest_bs_1.SPTypes.ControlMode.Edit
                    });
                    // Render the save button
                    var elButton = document.createElement("div");
                    elButton.classList.add("float-end");
                    elButton.classList.add("mt-3");
                    el.appendChild(elButton);
                    gd_sprest_bs_1.Components.Button({
                        el: elButton,
                        text: isNew_1 ? "Create" : "Update",
                        type: gd_sprest_bs_1.Components.ButtonTypes.OutlineSuccess,
                        onClick: function () { _this.save(_this._editForm, isNew_1); }
                    });
                    // Update the body
                    common_1.CanvasForm.setBody(el);
                }
                // Close the dialog
                dlg.close();
                // Show the form
                common_1.CanvasForm.show();
            });
        });
    };
    // Saves the form
    Form.prototype.save = function (form, isNew) {
        var _this = this;
        // Validate the form
        if (form.isValid()) {
            // Display a loading dialog
            gd_sprest_bs_1.Helper.SP.ModalDialog.showWaitScreenWithNoClose("Validating the Form").then(function (dlg) {
                // Update the title
                dlg.setTitle((isNew ? "Creating" : "Updating") + " the Item");
                // Save the item
                form.save().then(function (item) {
                    // Call the update event
                    _this._updateEvent ? _this._updateEvent() : null;
                    // Close the dialogs
                    dlg.close();
                    common_1.CanvasForm.hide();
                });
            });
        }
    };
    return Form;
}());
exports.Form = Form;
exports.ItemForm = new Form();
