import React from 'react';

class INSERTconteudo extends React.Component{
    render(){
        
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
         
        connection.query(`INSERT INTO CONTEUDOS (img , tituloBloco, texto, link, alt) VALUES ("${img}", "${titulodobloco}", "${texto}", "${link}", "${alt}") `, function (error, results, fields) {
          if (error) throw error;
          console.log('The solution is: ', results[0].solution);
        });
         
        connection.end();
    }}     
    
        return(     

        )
   
}


export default INSERTconteudo;