const express = require('express');

const launchesRouter = express.Router();
const { httpGetAllLaunches , httpAddNewLaunch} = require('../../controllers/launches.controller');

/**
 * Base path specified in app.js is launches
 */
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;