'use strict'; // 왜 선언해야되는지 궁금하면 http://jundol.kr/5

// Import dependencies
var bodyParser = require('body-parser');
var config = require('./config/config');
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan'); // HTTP request logger middleware for node.js
var path = require('path'); // 경로설정을 쉽게 해주는 모듈

// Import routes
var routes = require('./routes/index');

// Create a Express application
var app = express();

// Configure port
var port = process.env.PORT || config.port;

// Setup app 
app.set('port', port);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');

app.use('/', routes);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`The Server is Running at http://locahost:${port}\n`);
});


// Connect MongoDB
mongoose
    .connect(config.url)
    .then(() => { console.log(`MongoDB Connected Successfully\n`) })
    .catch((err) => console.error(`Fail to connect MongoDB\n ${err}`))



// // DB schema 생성 
// var userSchema = mongoose.Schema({
//     username: 'string',
//     age: 'number'
// });
 
// // compiles our schema into a model
// var User = mongoose.model('User', userSchema);
 
// // add user1 and user2 to "User" model
// var user1 = new User({ username: 'gchoi', age: 30 });
// var user2 = new User({ username: 'jmpark', age: 29 });
 
// // save user1
// user1.save(function (err, user1) {
//   if (err) // TODO handle the error
//       console.log("error");
// });
 
// // save user2
// user2.save(function (err, user2) {
//   if (err) // TODO handle the error
//       console.log("error");
// });


