const commonWebpackConfig = require('./webpack.config.common');
const env = process.env.NODE_ENV || 'development';

let overrides;
try {
	overrides = require(`./webpack.config.${env}.js`);
} catch (e) {
	overrides = {};
}

const {
	mode = 'development',
	entry = [],
	plugins = [],
} = overrides;

console.log(`Running webpack with 'webpack.config.${env}.js' overrides`);

module.exports = commonWebpackConfig({
	mode,
	entry,
	plugins,
});
