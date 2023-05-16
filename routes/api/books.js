const express = require('express');
const controllers = require('../../controllers/books/index');
const ctrlWrapper = require('../../helpers/ctrlWrapper');
const { authenticate, validateBody, isValidId } = require('../../middlewares/');
const { schemas } = require('../../models/book');
// const schemas = require('../../schemas/book');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(controllers.getAll));

router.get('/:id', isValidId, ctrlWrapper(controllers.getById));

router.post(
  '/',
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(controllers.add)
);

router.delete('/:id', isValidId, ctrlWrapper(controllers.removeById));

router.put(
  '/:id',
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(controllers.updateFavorite)
);

module.exports = router;
