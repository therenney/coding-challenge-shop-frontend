const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    // where to output built files
    outputDir: 'dist',

    // whether to use eslint-loader for lint on save.
    // valid values: true | false | 'error'
    // when set to 'error', lint errors will cause compilation to fail.
    // TODO: make error default @mulmedown ?
    lintOnSave: 'error',

    configureWebpack: {
        // We provide the app's title in Webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: 'coding-challenge-shop-frontend',
        // Set up all the aliases we use in our app.
        resolve: {
            alias: require('./aliases.config').webpack,
        },
        plugins: [
            // Optionally produce a bundle analysis
            // TODO: Remove once this feature is built into Vue CLI
            new BundleAnalyzerPlugin({
                analyzerMode: process.env.ANALYZE ? 'static' : 'disabled',
                openAnalyzer: process.env.CI !== 'true',
            }),
        ],
    },
    css: {
        sourceMap: true,
        // Enable CSS modules for all CSS/pre-processor files.
        // This option does not affect *.vue files.
        modules: true,
    },
    // Configure Webpack's dev server.
    // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        // public: 'kollex.local',
        port: 8080,
    },
    // disable prefetching of js in index.html
    // chainWebpack: config => {
    //     config.plugins.delete('prefetch');
    // },
};
