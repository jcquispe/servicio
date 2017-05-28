var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autorizadoSchema = new Schema({ 
 numero_usuario: { type: String },
 token_autorizado: { type: String },
 estado: {type: String, enum: ['P', 'A', 'R']},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('autorizado', autorizadoSchema);