var bookshelf = require('../../bookshelf');



var Consorcio = bookshelf.Model.extend({
  tableName: 'consorcios' 
});

var Empresas = bookshelf.Model.extend({
  tableName: 'empresas',
  consorcio: function() {
    return this.hasMany(Consorcio,'empresas_id');
  }
});

module.exports = Empresas;
