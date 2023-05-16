const fs = require('fs/promises');
const moment = require('moment');

const serverLogger = (req, res, next) => {
  const func = async (req, res, next) => {
    const { url, method } = req;
    const date = moment().format('DD-MM-YYYY_hh:mm:ss');
    // const moduleObj = module;
    // console.log(moduleObj.exports, 'moduleObj');
    await fs.appendFile('./server.log', `\n${method}`);
    next();
  };
  return func;
};

module.exports = serverLogger;
