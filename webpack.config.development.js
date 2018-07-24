const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: [
		'webpack-hot-middleware/client',
	],
	devtool: 'sourcemap',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
};
