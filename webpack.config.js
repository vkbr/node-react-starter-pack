const path = require('path');
const isDevelopment = process.env.NODE_EVN !== 'production';


module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	entry: ['webpack-hot-middleware/client'],
	output: {
		filename: 'app.js',
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
		]
	}
};