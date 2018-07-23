const express = require('express');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const app = express();

if (!isDev) {
	app.use(require('./middlewares/hot'));
}

app.use(express.static('./dist'));

app.get('*', (req, res) => res.sendFile(path.resolve('./dist/app.js')));

app.listen(3000, () => {
	console.log('Server in port 3000');
});