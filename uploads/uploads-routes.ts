const express = require('express');
const uploadsController = require('./uploads-controller')

const router = express.Router();

router.post('/', uploadsController.createUpload);


module.exports = router;