const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const controllers = require('../../controllers/auth');

const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

//api/auth/register or signup
router.post(
  '/register',
  validateBody(schemas.registerSchema),
  ctrlWrapper(controllers.register)
);

//signin
router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(controllers.login)
);

//signout
router.get('/logout', authenticate, ctrlWrapper(controllers.logout));

module.exports = router;
