const path = require('path');

function resolveSrc(_path) {
    return path.join(__dirname, _path);
}

//  Add aliases to leverage @short handles
//  Vue, fix https://github.com/vuejs-templates/webpack/issues/215 by adding the runtime only
const aliases = {
    vue$: 'node_modules/vue/dist/vue.esm.js',
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@styles': 'src/styles/index.less',
    '@models': 'src/models',
    // '@router': 'src/router',
    '@src': 'src',
    '@store': 'src/store',
    '@views': 'src/views',
};

module.exports = {
    webpack: {},
};

for (const alias in aliases) {
    module.exports.webpack[alias] = resolveSrc(aliases[alias]);
}
