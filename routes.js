module.exports = function( app ){
	app.use('/products', require('./controllers/products'));
	app.use('/municipio', require('./controllers/municipios'));
	app.use('/cid', require('./controllers/cid'));
	app.use('/cid/term', require('./controllers/cid'));
	app.use('/cbo', require('./controllers/cbo'));
};
