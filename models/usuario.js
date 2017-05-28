var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({ 
  _id: { type: String },
  numero_cel: { type: String },
  imei_cel: {type: String},
  nombre_usuario: {type: String},
  anulado: {type: Boolean},
  fecha_registro: {type: Date},
  fecha_modificado: {type: Date}
});

module.exports = mongoose.model('usuario', usuarioSchema);