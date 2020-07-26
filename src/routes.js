const express = require('express');
const AuthorController = require('./controllers/AuthorController');
const CategoryController = require('./controllers/CategoryController');
const PicturesController = require('./controllers/PicturesController');
const routes = express.Router();

routes.get('/author', AuthorController.index);
routes.post('/author/create', AuthorController.create);

routes.get('/category', CategoryController.index);
routes.post('/category/create', CategoryController.create);

routes.get('/pictures', PicturesController.index);
routes.post('/pictures/create', PicturesController.create);

module.exports = routes;