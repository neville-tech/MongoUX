'use strict'

import http from 'http'
import app from './server'

const server = http.createServer(app.callback());

server.listen(3000);