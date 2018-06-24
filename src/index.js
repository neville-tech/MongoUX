'use strict'

const http = require('http');
const app = require('./server');

http.createServer(app.callback()).listen(3000);