var bookshelf = require('../../bookshelf');
var tipoConsorcio = require('./tipoConsorcio');
var empresas = require('./empresas');
var statusConsorcio = require('./statusConsorcio');

var Consorcio = bookshelf.Model.extend({
  tableName: 'consorcios',
  tipoConsorcio: function() {
    return this.belongsTo(tipoConsorcio);
  },
  empresas: function() {
    return this.belongsTo(empresas,'empresas_id');
  },
  statusConsorcio: function() {
    return this.belongsTo(statusConsorcio);
  }
});

module.exports = Consorcio;
