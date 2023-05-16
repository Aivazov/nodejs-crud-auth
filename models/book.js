const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleSchemaErrors } = require('../helpers');

const genreList = ['fantastic', 'adventures', 'roman', 'novella'];
const isbnRegexp = /^\d{3}-\d-\d{2}-\d{6}-\d$/;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: genreList, //enum is check if the field "genre" has one of the counted array's string elements
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    isbn: {
      type: String,
      required: true,
      match: isbnRegexp, //example 978-3-16-148410-0
      unique: true, //check that the book is Unique and will not repeat
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// const handleErrors = (error, data, next) => {
//   const { name, code } = error;
//   console.log(name);
//   console.log(code);

//   if (name === 'MongoServerError' && code === 11000) {
//     error.status = 409;
//   } else {
//     error.status = 400;
//   }
//   next();
// };

bookSchema.post('save', handleSchemaErrors);

const Book = model('book', bookSchema);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string()
    .valueOf(...genreList)
    .required(),
  favorite: Joi.bool(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

module.exports = {
  Book,
  schemas,
};
