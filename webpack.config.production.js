const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENV = 'production';

module.exports = {
	mode: ENV,
	pugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV),
		}),
		new UglifyJsPlugin({
			parallel: true,
		}),
	],
};