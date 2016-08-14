var express 	= require('express');
var router 		= express.Router();
var ibge		= require('../../models/ibge');


router.get('/:name', function( request, response ){
	ibge.find({'nome_municipio' : request.params.name }, function( err, municipio ){
		if( err )
		{
			console.log( err );
		}

		ibge.count({}, function( err, count ){
			console.log( count );
		});
		response.json( municipio);

	})
})

module.exports = router;
