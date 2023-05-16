const { rewritingData } = require('../helpers/index');
const getAll = require('./getAll');
const { v4: uuidv4 } = require('uuid');

const addBook = async ({ title, author }) => {
  const books = await getAll();
  const newBook = {
    id: uuidv4(), //generate random string
    title,
    author,
  };
  books.push(newBook);
  const result = await rewritingData(books);
  return result;
};

module.exports = addBook;
