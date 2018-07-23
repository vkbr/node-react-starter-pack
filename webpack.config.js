const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_EVN !== 'production';

const devPlugins = isDevelopment ? [
	new webpack.HotModuleReplacementPlugin(),
] : [];

const devEntries = [
	'webpack-hot-middleware/client',
];


module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	entry: [
		'./src/index.js',
		...devEntries,
	],
	output: {
		filename: 'app.js',
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		...devPlugins,
	]
};