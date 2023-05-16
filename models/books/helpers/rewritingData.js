const fs = require('fs/promises');
const filePath = require('./filePath');

const rewriting = async (data) => {
  const result = await fs.writeFile(filePath, JSON.stringify(data, null, 2)); // null and 2 for not stringify json file into one string
  return result;
};

module.exports = rewriting;
