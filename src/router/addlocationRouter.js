const express = require('express')

const addlocationRouter = express.Router();

const {addDelhiLocation,getDelhiLocation} = require('../controller/data.controller.js')

addlocationRouter.route('/ploc').post(addDelhiLocation);
addlocationRouter.route('/gloc').get(getDelhiLocation);

module.exports = addlocationRouter;