const historyFallback = require('connect-history-api-fallback');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config.js');
const webpack = require('webpack');

const bundler = webpack(config);

module.exports = [
	historyFallback({
		verbose: true,
	}),
  webpackDevMiddleware(bundler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      colors: true,
    },
  }),
  webpackHotMiddleware(bundler, {
    log: console.log, // eslint-disable-line no-console
  }),
];
