import config from './config';
import apiRouter from './api';

console.log(config);

import express from 'express';

const server = express();

server.get('/', (req, res) => {
	res.render('index', {
		content: 'Hello Express and EJS!'
	});
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
	console.info('Express listening on port ', config.port);
});
