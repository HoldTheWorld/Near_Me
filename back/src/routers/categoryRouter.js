const router = require('express').Router();
const { Category } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({raw: true});
    res.json( data );
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
