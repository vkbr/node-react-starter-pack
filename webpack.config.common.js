const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode, entry, plugins }) => ({
	mode,
	entry: [
		'./src/index.js',
		...entry,
	],
	output: {
		filename: 'app.js',
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		...plugins,
	]
});