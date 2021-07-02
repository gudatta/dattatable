var fs = require('fs');

// Copy a directory
function copyDirectory(src, target, appendFl) {
    // See if the target exists
    if (fs.existsSync(target)) {
        // Delete the target if we aren't appending files to it
        appendFl != true ? deleteDirectory(target) : null;
    }

    // Create the directory
    fs.mkdirSync(target);

    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function(item) {
            var srcPath = src + "/" + item;
            var targetPath = target + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Create the directory
                fs.mkdirSync(targetPath);

                // Copy the folder recursively
                copyDirectory(srcPath, targetPath);
            } else {
                // Ensure we don't overwrite files
                if (appendFl != true || fs.existsSync(targetPath) == false) {
                    // Read the file
                    var contents = fs.readFileSync(srcPath, "utf8");

                    // Write the file
                    fs.writeFileSync(targetPath, contents.replace("../generate", "./generate"), "utf8");
                }
            }
        });
    }
}

// Log
console.log("Copying the icons...");

// Copy the icons
copyDirectory("./node_modules/gd-sprest-bs/build/icons/svgs", "./icons");

// Copy the generate file
fs.copyFileSync("./node_modules/gd-sprest-bs/build/icons/generate.js", "./icons/generate.js");