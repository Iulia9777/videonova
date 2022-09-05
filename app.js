const express = require('express');
const mainRouter = require('./routes/main');
const server = express();

//ejs
server.set('view engine', 'ejs');
server.set('views', './views');

//static server
server.use(express.static('./public'));

//routes
server.use('/', mainRouter);

server.use((req, res, next) => {
    res.statusCode = 404;
    res.render('404');
 })
 
 server.listen(3000);
