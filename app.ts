const express = require('express');
const app = express();

const server = require('http').createServer(app);
const port = 9443;

app.use(express.static('ROOT'));
app.use(express.json()); // support JSON-encoded bodies

// add routes, app.post, app.get, etc.

server.listen(port, () => { 
	console.log(`App listening on port ${port}!`);
});
