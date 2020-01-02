const { Router } = require("express");
const routes = new Router();

const ConvidadosController = require('./app/controllers/convidadosController');


routes.post('/ordenate', ConvidadosController.ordenate);

module.exports = routes;