import React from 'react';

class DELETEconteudo extends React.Component{
    render(){

        // Passar o ID via GET posteriormente
        var id = "01"
    
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'TCC'
          
        });
         
        connection.connect();
         
        connection.query(`DELETE * FROM CONTEUDOS C WHERE C.id = ${id}`, function (error, results, fields) {
          if (error) throw error;
          console.log('The solution is: ', results[0].solution);
        });
         
        connection.end();
    }}     
    
        return(     

        )
   
}


export default DELETEconteudo;