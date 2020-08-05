const express = require('express'),
     http = require('http');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;
const menurouter = require("./Roters/menurouter");
const app = express();
app.use(bodyParser.json());
app.use('/menu',menurouter);



const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
