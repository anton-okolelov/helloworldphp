const webpack = require('webpack');
const path = require('path');
const ENVIRONMENT = process.env.NODE_ENV || 'development';

let config = {
    context: path.resolve(__dirname, "frontend"),
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "web/js")
    },
    resolve: {
        extensions: [ ".js", ".jsx", '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }, {
                    loader: 'ts-loader'
                }]
            },

            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT)
        })
    ],
    node: {
        process: false
    }
};

if (ENVIRONMENT == 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: false,
                warnings: false
            }
        })
    );
}

module.exports = config;

