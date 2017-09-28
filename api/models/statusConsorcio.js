var bookshelf = require('../../bookshelf');
var consorcios = require('./consorcio');

var statusConsorcio = bookshelf.Model.extend({
  tableName: 'statusconsorcio',
  consorcio: function() {
    return this.hasMany(consorcios);
  }
});

module.exports = statusConsorcio;
