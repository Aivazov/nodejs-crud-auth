const getAll = require('./getAll');

const getById = async (id) => {
  const allBooks = await getAll();
  const book = allBooks.find((item) => item.id === id);
  return book || 'not found';
};

module.exports = getById;
