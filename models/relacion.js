var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chofer = mongoose.model('chofer');
var vehiculo = mongoose.model('vehiculo');
var sindicato = mongoose.model('sindicato');

var relacionSchema = new Schema({ 
  _id: {type: String},
  chofer: {type: Schema.Types.ObjectId, ref: "chofer", required: [true, 'El NFC debe estar asignado a un Chofer']},
  vehiculo: {type: Schema.Types.ObjectId, ref: "vehiculo", required: [true, 'El NFC debe estar asignado a un Vehiculo']},
  sindicato: {type: Schema.Types.ObjectId, ref: "sindicato"},
  anulado: {type: Boolean},
  fecha_registro: {type: Date},
  fecha_modificado: {type: Date}
});

module.exports = mongoose.model('relacion', relacionSchema);