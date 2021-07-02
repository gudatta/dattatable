export * from "./common";
export * from "./dashboard";
export * from "./itemForm";

/** Styling */
import "./styles";

/** External Librarys */
export * from "gd-sprest-bs";
import * as $ from "jquery";
import * as moment from "moment";
export {
    $, moment
}

import * as GDSPREST from "gd-sprest-bs";
import * as Common from "./common";
import * as Dashboard from "./dashboard";
import * as ItemForm from "./itemForm";
window["DattaTable"] = { $, moment, ...GDSPREST, ...Common, ...Dashboard, ...ItemForm };