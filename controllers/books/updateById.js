// const books = require('../../models/books/actions/index');
const RequestError = require('../../helpers/RequestError');
const { Book } = require('../../models/book');
// const bookAddSchema = require('../../schemas/book');

const updateById = async (req, res, _) => {
  // try {
  // const { error } = bookSchema.add.validate(req.body);

  // if (error) {
  //   throw RequestError(400, error.message);
  // }

  const { id } = req.params;

  const result = await Book.findByIdAndUpdate(id, req.body, { new: true }); //new true needs to return updated result
  // const result = await books.updateById(id, req.body);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json({ message: 'Update was successful', result });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = updateById;
