// Webpack configuration.
// See: https://webpack.js.org/configuration/

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const distDir = path.resolve("./dist")

// We export a function instead of a raw object so that we can detect
// which environment we're building for.
// See: https://webpack.js.org/configuration/mode/
module.exports = (env, args) => {
    const isDev = env === "development"
    const isProd = env === "production"

    // Basic config. Start in main.tsx and load all
    // JS/TS files.
    const config = {
        mode: env,
        entry: "./src/main.tsx",
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            // This resolver plugin tells Webpack to also find module definitions
            // according to the tsconfig's type roots. This means that if we ever
            // use a library that doesn't have typings, we can add them ourselves
            // in ./typings.
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: path.resolve("./tsconfig.json"),
                }),
            ],
        },
        output: {
            filename: "[name].[contenthash].js",
            path: distDir,
        },
    }

    // config.module.rules matches file extensions to loaders.
    config.module = { rules: [] }

    // Use ts-loader for Typescript.
    // Aside from compiling Typescript into Javascript, it will also compile
    // JSX syntax into Javascript calls.
    config.module.rules.push({
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
            },
        ],
    })

    // Use file-loader for images.
    config.module.rules.push({
        test: /\.(jpg|jpeg|gif|png)$/,
        use: ["file-loader"],
    })

    // Add plugins.
    config.plugins = []

    // The HtmlWebpackPlugin will take our index.html and insert a
    // <script> tag with the filename of our compiled script.
    config.plugins.push(
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    )

    // In dev mode, generate source maps.
    if (isDev) {
        config.devtool = "source-map"
        config.modules.rules.push({
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
        })
    }

    // When running the dev server, make any URL serve index.html.
    if (isDev) {
        config.devServer = {
            historyApiFallback: {
                index: "/",
            },
        }
    }

    return config
}
