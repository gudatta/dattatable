import * as moment from "moment";

/** Libraries */

export * from "./canvas";
export * from "./modal";

/** Methods */

// Formats the date/time value
export const formatDateValue = (value: string) => {
    // Ensure a value exists
    if (value) {
        // Return the date value
        return moment(value).format("MM/DD/YYYY");
    }

    // Return nothing
    return "";
}

// Formats the date value to include time 

export const formatDateTimeValue = (value: string) => {
    // Ensure a value exists
    if (value) {
        // Return the date and military time value
        return moment(value).format('MM/DD/YYYY HHmm');
    }

    // Return nothing
    return "";
}