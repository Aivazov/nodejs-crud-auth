const { rewritingData } = require('../helpers/index');
const getAll = require('./getAll');

const updateById = async (id, { title, author }) => {
  const books = await getAll();
  const bookIdx = books.findIndex((book) => book.id === id);
  if (bookIdx === -1) {
    return 'book not found';
  }

  books[bookIdx] = { id, title, author };
  await rewritingData(books);
  return books[bookIdx];
};

module.exports = updateById;
