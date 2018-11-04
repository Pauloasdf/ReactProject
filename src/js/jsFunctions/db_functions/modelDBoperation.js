
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'TCC'
});
 
connection.connect();

function getUsuarioById(id) {
    connection.query( 'SELECT * FROM usuarios WHERE id = ?', [ id ],
      function ( error, results, fields ) {
        console.log( results )
      }
    )
  }

connection.end();