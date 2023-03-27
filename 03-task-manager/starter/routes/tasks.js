const express = require('express');
const router = express.Router();

//importing controllers
const {getAllTasks} = require('../controllers/tasks');

//routes
router.route('/').get(getAllTasks);


module.exports = router;