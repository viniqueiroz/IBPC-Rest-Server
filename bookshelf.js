var knex = require('knex')({
  client: 'mysql',
  connection: {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ibpc',
  charset  : 'utf8'
}
});

var bookshelf = require('bookshelf')(knex);



module.exports = bookshelf;
