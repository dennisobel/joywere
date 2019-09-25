const express  = require('express');
const routes = require("./app/routes/routes");
const app      = express();
const session = require('express-session');
const server = require('http').createServer(app);
// const socketio = require('socket.io');
// const io = socketio().listen(server)
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require('morgan');
// const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '127.0.0.1';

app.use(session({
    secret:'SleepyeyeS2017',
    resave: true,
    saveUninitialized: true
}));

app.use(cors());

app.use(function(req,res,next){   
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

// var clients = {};
// require('./socket/socket.js')(io,clients)

server.listen(PORT,()=>console.log(`Live on ${PORT}`));
routes(app);