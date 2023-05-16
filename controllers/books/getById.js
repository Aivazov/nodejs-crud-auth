const books = require('../../models/books/actions/index');
const RequestError = require('../../helpers/RequestError');

const { Book } = require('../../models/book');

const getById = async (req, res, next) => {
  // try {
  const { id } = req.params;
  const result = await Book.findById(id);
  // const result = await Book.findOne({ _id: id }); //find by differ criteria
  // const result = await books.getById(id);

  if (!result) {
    throw RequestError(404, 'Not found');
    // res.status(404).json({ message: 'Book not found' });
    // return;
  }
  res.json(result);
  // } catch (error) {
  // next(error);
  // res.status(500).json({
  //   message: `Server error: ${error.message}`,
  // });
  // }
};

module.exports = getById;
