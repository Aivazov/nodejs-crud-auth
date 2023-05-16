const express = require('express');

const usersAction = require('../../models/users');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await usersAction.getList();
  res.status(200).json(result);
});

router.get('/:id', async (req, res, next) => {
  res.json({ message: 'template' });
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'template' });
});

router.delete('/:id', async (req, res, next) => {
  res.json({ message: 'template' });
});

module.exports = router;
