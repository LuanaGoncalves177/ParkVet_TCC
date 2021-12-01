/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
//var app = require('../../index')
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'admin',
              database : 'parkvet'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'space cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only


 
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile',user.profile);//to render users profile
app.get('/home/RegPacotes', user.RegPacotes);//call for pack page
app.post('/RegPacotes', user.RegPacotes);//call for signup post
app.get('/home/RegFuncionario', user.RegFuncionario);//call for pack page
app.post('/RegFuncionario', user.RegFuncionario);//call for signup post 
app.get('/home/RegPets', user.RegCliente);//call for pack page
app.post('/RegPets', user.RegCliente);//call for signup post 
app.get('/home/RegTutor', user.RegPets);//call for pack page
app.post('/RegTutor', user.RegPets);//call for signup post 
app.get('/home/RegServico', user.RegPets);//call for pack page
app.post('/RegServico', user.RegPets);//call for signup post 
app.get('/home/RegServiCocontratado', user.RegPets);//call for pack page
app.post('/RegServicoContratado', user.RegPets);//call for signup post 
//Middleware
app.listen(8080)
