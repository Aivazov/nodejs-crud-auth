const isConflict = ({name, code}) => {
  return name === 'MongoServerError' && code === 11000;
};

const handleSchemaError = (error, data, next) => {
  error.status = isConflict(error) ? 409 : 400;
  // const { name, code } = error;

  // if (name === 'MongoServerError' && code === 11000) {
  //   error.status = 409;
  // } else {
  //   error.status = 400;
  // }
  next();
};

module.exports = handleSchemaError;
