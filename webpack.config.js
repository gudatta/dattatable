var project = require("./package.json");
var path = require("path");
var TerserPlugin = require("terser-webpack-plugin");

// Return the configuration
module.exports = (env, argv) => {
    var isDev = argv.mode !== "production";
    return {
        // Set the main source as the entry point
        entry: [
            path.resolve(__dirname, project.main)
        ],

        // Output location
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "dattatable" + (isDev ? "" : ".min") + ".js"
        },

        // Optimize and minimize the code
        optimization: {
            minimize: (isDev ? false : true),
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        output: {
                            // Remove all comments if it's not a dev build
                            comments: (isDev ? true : false),
                        }
                    },
                }),
            ]
        },

        // Resolve the file names
        resolve: {
            extensions: [".js", ".css", ".scss", ".ts"],
            alias: {
                // Reference the minified versions
                "datatables.net": "datatables.net/js/jquery.dataTables.min.js",
                "datatables.net-bs5": "datatables.net-bs5/js/dataTables.bootstrap5.min.js",
                "jquery": "jquery/dist/jquery.min.js",
                "moment.js": "moment/min/moment.min.js"
            }
        },

        // Dev Server
        devServer: {
            inline: true,
            hot: true,
            open: true,
            publicPath: "/dist/"
        },

        // Loaders
        module: {
            rules: [
                // SASS to JavaScript
                {
                    // Target the sass and css files
                    test: /\.s?css$/,
                    // Define the compiler to use
                    use: [
                        // Create style nodes from the CommonJS code
                        { loader: "style-loader" },
                        // Translate css to CommonJS
                        { loader: "css-loader" },
                        // Compile sass to css
                        { loader: "sass-loader" }
                    ]
                },
                // Handle Image Files
                {
                    test: /\.(jpe?g|png|gif|svg|eot|woff|ttf)$/,
                    loader: "url-loader"
                },
                // TypeScript to JavaScript
                {
                    // Target TypeScript files
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        // JavaScript (ES5) -> JavaScript (Current)
                        {
                            loader: "babel-loader",
                            options: { presets: ["@babel/preset-env"] }
                        },
                        // TypeScript -> JavaScript (ES5)
                        { loader: "ts-loader" }
                    ]
                }
            ]
        }
    };
}