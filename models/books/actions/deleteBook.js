const getAll = require('./getAll');
const { rewritingData } = require('../helpers/index');

const deleteBook = async (id) => {
  const books = await getAll();
  // const parsedBooks = JSON.parse(books);
  const bookIdx = books.findIndex((book) => book.id === id);
  if (bookIdx === -1) {
    return 'book not found';
  }

  const [result] = books.splice(bookIdx, 1);
  await rewritingData(books);
  return result;
};

module.exports = deleteBook;
