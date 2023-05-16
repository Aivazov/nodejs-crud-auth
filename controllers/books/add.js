// const books = require('../../models/books/actions/index');
// const RequestError = require('../../models/books/helpers/RequestError');
// const schemas = require('../../models/book');

const { Book, schemas } = require('../../models/book');

const add = async (req, res, _) => {
  console.log(req.user);
  const { _id: owner } = req.user;
  // try {
  // const { error } = schemas.addSchema.validate(req.body);
  // if (error) {
  //   throw RequestError(400, error.message);
  // }
  const newBook = await Book.create({ ...req.body, owner });
  // const newBook = await Book.create(req.body);
  // const newBook = await books.addBook(content);
  res.status(201).json({ message: 'Entry added successfully' });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = add;
