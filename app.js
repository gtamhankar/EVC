var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
var index = require('./routes/index');
var users = require('./routes/users');
var genericpoll = require('./routes/genericpoll');
var polltemplates = require('./routes/polltemplates');
var pollresults =  require('./routes/pollresults');

// sujith's code
const http = require("http");
const _ = require('underscore');
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const app = express();
app.use(index);
//const server = http.createServer(app);

// changes by gnt
const server = http.createServer(app, function (request, response) {
response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});
response.end('Hello World\n');
}).listen(PORT, () => {
console.log(`ðŸŒŽ ==> API server now on port ${PORT}!`)
});


const io = socketIo(server);

//storing data
var connections = [];
var title = "Poll Name from Server" // admin can set this
var audience = [];
var administrator = {};
var questions = require('./Questions-server');
var currentQuestion = false;



io.on("connection", socket => {
    socket.once('disconnect', function(){
        var user = _.findWhere(audience, {id: this.id});
        if (user) {
          audience.splice(audience.indexOf(user), 1)
          io.sockets.emit('audience', audience);
          console.log(' %s left now (%s members remaining)', user.name, audience.length)
        } else if (this.id === administrator.id){
           console.log ("%s has left. '%s' is over", administrator.name, title)
           administrator = {};
           title = "";
           io.sockets.emit('end', {title:title, administrator:""})
        }

        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log('Disconnect : %s members remaining' , connections.length)
    });

    socket.on('join', function(dataFromClient){
      var newMember = {
        id: this.id,
        name:dataFromClient.name,
        type:'audience'
      };
      this.emit('joined', newMember) //sending this obj to client  sever received.
      audience.push(newMember); //into the array
      io.sockets.emit('audience', audience); // sending this to the client
      console.log( " %s joined the poll", dataFromClient.name);
    });

    //When the admin starts
    socket.on('start', function(dataAboutAdmin){
      administrator.name = dataAboutAdmin.name;
      administrator.id = this.id;
      title = dataAboutAdmin.title;
      administrator.type = 'administrator';
      this.emit('joined', administrator); //sending this back to client/console
      io.sockets.emit('start', { title: title, administrator: administrator.name });
      console.log(" Admin => '%s' joined, Title => %s ", administrator.name, dataAboutAdmin.title);
    });
    socket.on('ask', function(question){
      currentQuestion = question;
      io.sockets.emit('ask', currentQuestion);
      console.log("questions '%s'", question.q);
    })
    socket.emit('welcome', {
        title:title,
        audience:audience,
        administrator:administrator.name,
        questions:questions,
        currentQuestion:currentQuestion

    });
    connections.push(socket)
    console.log("Connected : %s sockets connected", connections.length);


  socket.on("disconnect", () => console.log("Client disconnected"));
});

// end of Sujith's code



//var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'everyvotecounts'
	});
	res.locals.connection.connect();
	next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/genericpoll',genericpoll);
app.use('/polltemplates',polltemplates);
app.use('/pollresults', pollresults);

//app.listen(PORT, () => {
//  console.log(`ðŸŒŽ ==> API server now on port ${PORT}!`);
//});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//var http = require('http');
module.exports = app;
//var server = http.createServer(app);
//server.listen(4007);

