var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var cidSchema = new Schema({
	sub_categoria 	: String,
	classificacao 	: String,
	restricao_sexo 	: String,
	causa_obito 	: String,
	descricao 		: String,
	descricao_breve : String,
	referencia 		: String,
	excluidos 		: String

});

var cid = mongoose.model('cids', cidSchema );

module.exports = cid;
