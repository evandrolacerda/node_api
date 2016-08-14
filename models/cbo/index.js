var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var cboSchema = new Schema({
			codigo : String,
			descricao : String
});

var cboModel = mongoose.model('cbo', cboSchema );

module.exports = cboModel;