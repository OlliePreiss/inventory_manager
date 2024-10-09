const { Router } = require('express');
const companyController = require('../controllers/companyController')

const companyRouter = Router();

companyRouter.get('/', companyController.companyListGet);
companyRouter.get('/new', companyController.companyNewGet);
companyRouter.post('/new', companyController.companyNewPost);

module.exports = companyRouter;
