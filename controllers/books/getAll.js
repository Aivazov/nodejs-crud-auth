// const books = require('../../models/books/actions/index');
const { Book } = require('../../models/book');

const getAll = async (req, res) => {
  // try {
  const { _id: owner } = req.user;

  // pagination
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  // const result = await Book.find();
  // const result = await Book.find({ owner }, '-createdAt -updatedAt', {
  //   skip: 2,
  //   limit: Number(limit),
  // }) //if I want to get all fields except selected. Otherwise, remove dash - to take every selected
  const result = await Book.find({ owner }, '-createdAt -updatedAt')
  .populate('owner', 'email'); // using the second parameter we get only an email of the user
  // .populate('owner'); //find all the info of the object
  // const result = await Book.find({}, '-createdAt -updatedAt'); //if I want to get all fields except selected. Otherwise, remove dash - to take every selected
  res.json(result);
  // const result = await books.getAll();
  // } catch (error) {
  //   next(error);
  // res.status(500).json({
  //   message: `Sever error: ${error.message}`,
  // });
  // }
};

module.exports = getAll;
