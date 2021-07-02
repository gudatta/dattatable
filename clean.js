const fs = require("fs");

// See if the build directory exists
if (fs.existsSync("./build")) {
    // Delete the file
    fs.rmdirSync("./build", { recursive: true });

    // Log
    console.log("Deleted the build directory.");
}

// See if the dist directory exists
if (fs.existsSync("./dist")) {
    // Delete the file
    fs.rmdirSync("./dist", { recursive: true });

    // Log
    console.log("Deleted the dist directory.");
}