'use strict'

const koa = require('koa');
const router = require('./router');

const app = new koa();

app.use(router.routes());

module.exports = app;
