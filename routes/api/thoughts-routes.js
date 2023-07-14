const router = require('express').Router();

const {
  getThoughts,
  addThought,
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getThoughts)
  .post(addThought);

module.exports = router;