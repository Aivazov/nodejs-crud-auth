const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(401, 'Email not found');
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw RequestError(401, 'Wrong password');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '4h' });
  await User.findByIdAndUpdate(user._id, { token });
  // const token = '125sgds.3153tae.e523423444';

  res.json({
    token,
  });

  // const hashPassword = await bcrypt.hash(password, 10);
  // const result = await User.create({ email, password: hashPassword });
  // res.status(201).json({
  //   email: result.email,
  // });
};

module.exports = login;
