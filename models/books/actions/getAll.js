const fs = require('fs/promises');
const { filePath } = require('../helpers/index');

const getAll = async () => {
  const data = await fs.readFile(filePath);
  if (!data) {
    return JSON.parse({ data: 'not found' });
  }
  return JSON.parse(data);
};

module.exports = getAll;
