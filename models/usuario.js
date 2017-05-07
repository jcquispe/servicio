var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({ 
 numero_cel: { type: Number },
 token_cel: { type: String },
 nombre_usuario: {type: String},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('Usuario', usuarioSchema);