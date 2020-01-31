const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.less$/,
            exclude: 'src/themes/less/_variables.less',
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader', //interprets @import and url() like import/require() and will resolve them
                },
                {
                    loader: 'postcss-loader' //autoprefixing
                },
                {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        sourceMap: true,
                        javascriptEnabled: true,
                        paths: [path.resolve(__dirname, './src/')],
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
    },
};