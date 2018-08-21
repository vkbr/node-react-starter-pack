const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const isDev = process.env.NODE_ENV === 'development';

const app = express();

if (isDev) {
	app.use(require('./middlewares/hot'));
}

app.use(express.static('./dist'));

app.get('*', (req, res) => res.sendFile(path.resolve('./dist/index.html')));

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.\nhttp://localhost:${PORT}\nhttp://127.0.0.1:${PORT}`);
});