var express 	= require('express');
var routerCid 	= express.Router();
var cids 		= require('../../models/cid');
var Regex   = require('regex');
var body 		= require('body-parser');

routerCid.get( '/:name', function( request, response ){

		cids.find({ 'sub_categoria' : request.params.name }, function( err, cid ){
				response.json( cid );
		})
});

routerCid.get('/term/:term', function( request, response ){
		cids.find({ 'descricao' : {
			$regex : request.params.term,
			$options: 'i'
		} }
		, function( err, cid ){
			console.log(request.params.term);
			response.json( cid );
		});
});

module.exports = routerCid;
