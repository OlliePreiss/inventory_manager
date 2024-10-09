const express = require("express");
const path = require("node:path");
const PORT = process.env.PORT || 3005;
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const companyRouter = require('./routes/companyRouter');
const testerRouter = require('./routes/testerRouter');
const testRouter = require('./routes/testRouter');
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", indexRouter);
app.use('/user', userRouter);
app.use('/company', companyRouter);
app.use('/tester', testerRouter);
app.use('/test', testRouter);

app.listen(PORT)
