const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, '../dist'),
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js(x?)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                },
            ]
        },
    }
};
