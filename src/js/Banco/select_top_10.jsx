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

        select * from CONTEUDOS C where C.visualizacoes in (select co.visualizacoes from CONTEUDOS CO where C.id = CO.ID order by C.visualizacoes desc) order by 1, 2 desc limit 10
        
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