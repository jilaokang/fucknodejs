const Router = require('koa-router');
const postCtl = require('./controller/showpost.contorller')
const router = new Router();

const checkLogin = require('../middleware/check').checkLogin

router.get('/showpost', checkLogin, postCtl.showPost)
router.post('/showpost', postCtl.accessData)

module.exports = router