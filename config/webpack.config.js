const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const development = require('./webpack.development.config');
const production = require('./webpack.production.config');

module.exports = () => {
    if (process.env.NODE_ENV === 'development') return merge(common(), development())
    if (process.env.NODE_ENV === 'production') return merge([common(), production()])
};
