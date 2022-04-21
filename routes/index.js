const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('TEST');
});

module.exports = routes;