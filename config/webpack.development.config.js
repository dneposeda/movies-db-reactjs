const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return {
        mode: 'development',
        output: {
            filename: '[name].js',
            publicPath: '/'
        },
        devtool: 'source-map',
        devServer: {
            contentBase: path.resolve(__dirname, '../dist'),
            port: 9000,
            hot: true,
            historyApiFallback: true,
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ]
        },
    }
};
