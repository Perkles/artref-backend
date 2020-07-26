const express = require('express');
const AuthorController = require('./controllers/AuthorController');
const routes = express.Router();

routes.get('/author', AuthorController.index);
routes.post('/author/create', AuthorController.create);

module.exports = routes;