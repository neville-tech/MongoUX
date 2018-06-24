'use strict'

import Router from 'koa-router'

const router = new Router();

//endpoints

router.get('/databases', 'will list all databases')

router.get('/collections', 'will list all collections')

export default router;