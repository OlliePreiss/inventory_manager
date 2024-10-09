const { Router } = require('express');
const testController = require('../controllers/testController')

const testRouter = Router();

testRouter.get('/', testController.testListGet);
testRouter.get('/new', testController.testNewGet);
testRouter.post('/new', testController.testNewPost);

module.exports = testRouter;
