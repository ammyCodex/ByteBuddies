const express = require('express');
const router = express.Router();
const codeController = require('../controllers/codeController');

router.post('/save', codeController.saveCode);
router.get('/:id', codeController.getCode);

module.exports = router;
