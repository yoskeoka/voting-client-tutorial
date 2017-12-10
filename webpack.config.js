module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./dist",
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
};
