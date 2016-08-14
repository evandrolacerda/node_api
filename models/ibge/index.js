var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var municipiosSchema = new Schema({
			uf 								: String,
			nome_uf 					: String,
			mesoregiao_geografica	: String,
			nome_mesoregiao			: String,
			microregiao_geografica	: String,
			nome_microregiao	: String,
			municipio: String,
			codigo_municipio_completo: String,
			nome_municipio: String
});

var municipio = mongoose.model('ibge_municipios', municipiosSchema );

module.exports = municipio;
