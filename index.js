var http 			= require('http');
var express 	= require('express');
var body 			= require('body-parser');
var morgan 		= require('morgan');
var mongoose 	= require('mongoose');


var app 			= express();
var server 		= http.createServer( app );

mongoose.connect('mongodb://localhost/codes_api');

var connection = mongoose.connection;

connection.on('error', console.error.bind( console, 'connection error:') );

server.listen( 3000, function(){
	console.log('Servidor escutando na porta 3000');
});

//midleware
app.use(body.urlencoded( { extended: true }) );
app.use( body.json() );

require('./routes')(app);


server.on('connection', function(){
	console.log('Nova Conexão recebida');
});
