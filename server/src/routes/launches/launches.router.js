const express = require('express');

const launchesRouter = express.Router();
const { httpGetAllLaunches } = require('../../controllers/launches.controller');

launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;