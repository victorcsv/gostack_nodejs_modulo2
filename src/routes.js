const express = require('express');
const routes = new express.Router();

routes.get('/', (req, res) => {
  return res.render('auth/signup');
});

module.exports = routes;
