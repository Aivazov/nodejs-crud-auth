const books = require('../../models/books/actions/index');
const RequestError = require('../../helpers/RequestError');
const { Book } = require('../../models/book');

const removeById = async (req, res, _) => {
  // try {
  const { id } = req.params;
  const removeBook = await Book.findByIdAndRemove(id);
  // const removeBook = await books.deleteBook(id);

  if (!removeBook) {
    throw RequestError(404, 'Not found');
  }
  res.status(200).json({
    message: 'Book deleted',
  });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = removeById;
