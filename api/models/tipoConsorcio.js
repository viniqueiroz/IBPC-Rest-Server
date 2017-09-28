var bookshelf = require('../../bookshelf');

var Consorcio = bookshelf.Model.extend({
  tableName: 'consorcios'
});

var tipoConsorcio = bookshelf.Model.extend({
  tableName: 'tipoconsorcio',
  consorcio: function() {
    return this.hasMany(Consorcio);
  }
});

module.exports = tipoConsorcio;
