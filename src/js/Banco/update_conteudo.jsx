import React from 'react';

class UPDATEconteudos extends React.Component{
    render(){
        
        var id = "01"

        var img = 'www.google.com';
        var titulodobloco = "Primeiro título Mermão";
        var texto = "Glória a DEUXXXXXXX";
        var link = "#joaopaulo";
        var alt = "";
    
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'TCC'
        });
         
        connection.connect();
         
        connection.query(`

        UPDATE CONTEUDOS C SET img = "${img}"                   WHERE C.id= ${id};
        UPDATE CONTEUDOS C SET tituloBloco = "${titulodobloco}" WHERE C.id= ${id};
        UPDATE CONTEUDOS C SET texto = "${texto}"               WHERE C.id= ${id};
        UPDATE CONTEUDOS C SET link = "${link}"                 WHERE C.id= ${id};
        UPDATE CONTEUDOS C SET alt = "${alt}"                   WHERE C.id= ${id}; 
        
        `, function (error, results, fields) {
          if (error) throw error;
          console.log('The solution is: ', results[0].solution);
        });
         
        connection.end();
    }}     
    
        return(     

        )
   
}


export default UPDATEconteudos;