const express = require('express');
const cors = require('cors');
const morganLogger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/api/auth');

dotenv.config();
//or
// require("dotenv").config();
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log('Connection to the database was successful'))
  .catch((err) => console.log(err.message));

const booksRouter = require('./routes/api/books');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morganLogger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use(async (req, res, next) => {
//   const { url, method } = req;
//   const date = moment().format('DD-MM-YYYY_hh:mm:ss');
//   const moduleObj = module;
//   console.log(moduleObj.exports, 'moduleObj');
//   // await fs.appendFile('./server.log', `\n${method}`);
//   next();
// });

// app.use(serverLogger(req, res, next));

app.use('/api/books', booksRouter);
app.use('/api/auth', authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = err.message } = err;
  res.status(status).json({ message });
  // res.status(500).json({ message: err.message });
});

app.listen(8080, () => {
  console.log('Server is run on PORT: 8080');
});

module.exports = app;
