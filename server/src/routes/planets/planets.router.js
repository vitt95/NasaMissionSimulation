const express = require('express');
const planetsRouter = express.Router();
//const planetsController = require('./planets.router');

const {
    httpGetAllPlanets,
} = require('../../controllers/planets.controller');

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;