const webpack = require("webpack");

module.exports = {
    entry: [
        "react-hot-loader/patch",
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        `webpack-dev-server/client?http://localhost:8080`,
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        "webpack/hot/only-dev-server",
        "./src/index.js",
    ],
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./dist",
        port: 8080,
        hot: true,
        inline: true,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|mjs)$/,
                        loader: require.resolve("babel-loader"),
                        options: {
                            compact: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};
