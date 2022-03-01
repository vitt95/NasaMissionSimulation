const express = require('express');
const planetsRouter = express.Router();
//const planetsController = require('./planets.router');

const {
    httpGetAllPlanets,
} = require('../../controllers/planets.controller');

/**
 * Base path sprcified in app.js /planets
 */
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;