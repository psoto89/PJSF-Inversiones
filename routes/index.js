var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const mainController = require('../controladores/controladores');

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
