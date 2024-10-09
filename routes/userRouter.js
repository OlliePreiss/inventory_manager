const { Router } = require('express');
const userController = require('../controllers/userController')

const userRouter = Router();

userRouter.get('/', userController.userListGet);
userRouter.get('/new', userController.userNewGet);
userRouter.post('/new', userController.userNewPost);

module.exports = userRouter;
