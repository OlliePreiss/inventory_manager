const { Router } = require('express');
const testerController = require('../controllers/testerController')

const testerRouter = Router();

testerRouter.get('/', testerController.testerListGet);
testerRouter.get('/new', testerController.testerNewGet);
testerRouter.post('/new', testerController.testerNewPost);

module.exports = testerRouter;
