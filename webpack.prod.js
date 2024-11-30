const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        maxAssetSize:200000000,
        maxEntrypointSize: 20000000,
    },
})
