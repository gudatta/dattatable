export * from "./common";
export * from "./dashboard";
export * from "./itemForm";

/** Styling */
import "./styles";

/** Global Variable */

import { CanvasForm, Modal } from "./common";
import { Dashboard } from "./dashboard";
import { ItemForm } from "./itemForm";

const DattaTable = {
    CanvasForm,
    Dashboard,
    ItemForm,
    Modal
}
window["DattaTable"] = DattaTable;
export default DattaTable;
