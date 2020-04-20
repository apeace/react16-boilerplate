// Webpack configuration.
// See: https://webpack.js.org/configuration/

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
        },
        output: {
            filename: "[name].[contenthash].js",
            path: distDir,
        },
    }

    // config.module.rules matches file extensions to loaders.
    config.module = { rules: [] }

    // Use ts-loader for Typescript.
    // Typescript will compile away the TSX syntax as well as compiling
    // Typescript into Javascript. Therefore this is the only loader we need.
    config.module.rules.push({
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
            },
        ],
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
