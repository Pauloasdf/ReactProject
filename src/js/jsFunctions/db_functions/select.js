var mysql      = NodeRequire('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'TCC'
})
 
connection.connect();

        function buscarimg(id,$img){
            var img = connection.query(`Select c.img from conteudos c where c.id = ${id}`,
              function (error, results, fields) {
              if (error) throw error;
              console.log('The solution is: ', results[0].solution);
        });}

        function buscarTexto(id){
              var texto = connection.query(`Select c.texto from conteudos c where c.id = ${id}`,
              function (error, results, fields) {
              if (error) throw error;
              console.log('The solution is: ', results[0].solution);
        });}

        function buscarLink(id){
              var link = connection.query(`Select c.link from conteudos c where c.id = ${id}`,
              function (error, results, fields) {
              if (error) throw error;
              console.log('The solution is: ', results[0].solution);
        });}
         
        function buscarAlt(id){
              var alt = connection.query(`Select c.alt from conteudos c where c.id = ${id}`,
              function (error, results, fields) {
              if (error) throw error;
              console.log('The solution is: ', results[0].solution);
        });}

        function buscarVisualizacoes(id){
              var visualizacoes = connection.query(`Select c.visualizacoes from conteudos c where c.id = ${id}`,
              function (error, results, fields) {
              if (error) throw error;
              console.log('The solution is: ', results[0].solution);
        });}
        buscarimg(id);
        buscarTexto(id);
        buscarLink(id);
        buscarAlt(id);
        buscarVisualizacoes(id);

        connection.end();  