const express = require('express');
const path = require('path');
const server = express();
const PORT = 3000;
const PUBLIC_PATH = __dirname + '/dist';

server.use(express.static(PUBLIC_PATH));
server.get('/', (req, res) => res.sendFile(path.resolve(PUBLIC_PATH, 'index.html')))

server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
