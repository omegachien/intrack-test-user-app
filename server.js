const http = require('http');

require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 1337;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on ${port}...`);
});

module.exports = server;