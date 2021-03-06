var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/');
var Twitter = require('twitter');
//var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);



// geocode = "40.1164204,-88.24338290000003,50mi"
// query = "stress OR stressed OR stressing OR tired"
// //statuses = api.search(q=query, geocode=geocode, count=1)

// var client = new Twitter({
//   consumer_key: 'sHndUIB5Obz6CKFj6IDacXnFc',
//   consumer_secret: 'i1oqZhCC5kJJjfgMbCcEawKlqcTR9PSI53i3nWgKcWUvi45TXf',
//   access_token_key: '786232481456414720-o9VxrRoX1mYQm8FHSLXt6IcvpxMljqG',
//   access_token_secret: 'T1apaw81udzULOIblAqSalBw4HT2fhZuqQplRQ28Q96J4'
// });
// client.get('search/tweets', {q: query, geocode: geocode, count: 1},function(error, tweets, response) {
//   if(error) throw error;
//   tweets = tweets
//   console.log(tweets);  // The favorites.
//   //console.log(response);  // Raw response object.
// });

// jsdom.jQueryify(window, "/javascript/jquery-3.1.1.min.js", function () {
//   var $ = window.$;
//   console.log("app.js");
//   $("#feeling").keydown(function( event ) {
//       console.log("inside function");
//       if ( event.which == 13 ) {
//          console.log("if statement");
//          event.preventDefault();
//          var feeling = document.getElementById("feeling").value;
//          console.log(feeling);
//       }
//     })
// });

// $(document).ready(function() {
//   $("#feeling" ).keydown(function( event ) {
//     if ( event.which == 13 ) {
//        event.preventDefault();
//        var feeling = document.getElementById('feeling').value;
//        console.log(feeling);
//     }
//   })
// });


// jsdom.jQueryify(window, "https://code.jquery.com/jquery-3.1.1.js", function () {
//   var $ = window.$;
//   console.log($("#home").html());
//   $("#home").click(function(){
//     console.log("homey");
//   });
//   $("#search-bar" ).keydown(function( event ) {
//     console.log("function");
//     if ( event.which == 13 ) {
//       console.log("if statement");
//       event.preventDefault();
//       var feeling = document.getElementById('search-bar').value;
//       console.log(feeling);
//     }
//   })
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

