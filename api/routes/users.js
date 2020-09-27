const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.delete('/:id', UserController.delete);

module.exports = router;