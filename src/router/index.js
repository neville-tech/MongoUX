'use strict'

const KoaRouter = require('koa-router');

const router = new KoaRouter();

//endpoints

router.get('/', async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello world!'
    }
});

router.get('/databases', 'will list all databases')

router.get('/collections', 'will list all collections')

module.exports = router;