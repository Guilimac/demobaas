let express = require('express');
let router = express.Router();
let EmpCtrl = require('./controllers/employeeCtrl');

router.get('\employee',EmpCtrl.findAll);

module.exports = router;

