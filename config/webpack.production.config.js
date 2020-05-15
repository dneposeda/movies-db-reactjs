const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return {
        mode: 'production',
        output: {
            filename: '[name].[hash].js',
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.[hash].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
    }
};
