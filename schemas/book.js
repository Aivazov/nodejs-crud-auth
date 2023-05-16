const Joi = require('joi');

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

const bookValidator = (bodyRequest) => {
  const { error } = bookSchema.validate(bodyRequest);
  return error;
};

module.exports = {
  add: bookAddSchema,
};
