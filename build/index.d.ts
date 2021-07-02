export * from "./common";
export * from "./dashboard";
export * from "./itemForm";
import { Dashboard } from "./dashboard";
declare const DattaTable: {
    CanvasForm: import("./common").Canvas;
    Dashboard: typeof Dashboard;
    ItemForm: import("./itemForm").Form;
    Modal: import("./common").ModalDialog;
};
export default DattaTable;
