var express 	= require('express');
var router 		= express.Router();	
var cbo			= require('../../models/cbo');

router.get('/:name', function( request, response ){
	
	console.log('CBO = ' + cbo );

	cbo.find({'codigo' : request.params.name }, function( err, cbo ){
		if( err )
		{
			console.log( err );
		}

		console.log( request.params.name );
		response.json( cbo );
		
	});		
});

module.exports = router;