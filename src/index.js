import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';




// PÁGINA

//import Head from './js/head/head';
// import Titulo from './js/titulo/titulo';
import Navbar from './js/navbar/navbar';
import BlocoConteudo from './js/conteudo/bloco-conteudo';

import Banner from './js/conteudo/banner';

// import Banner2 from './js/conteudo/carousel'

import Footer from './js/footer/footer';

// BANCO
// import INSERTconteudo from './js/conteudo/insert_conteudo';


let App = (
        
  <div>
        <Navbar titulo="SyoLearn" cor="red" />
        
        {/* <Titulo titulo="Home"/> */}
        
        <div className="row">
    
          <div className="col s2">
          {/* <menuAncora /> */}
          </div>
    
          <div className="col s10 pagina_central">
          <Banner />
          <BlocoConteudo />
          </div> 
        </div>
        <Footer cor="red"/>
  </div>
  
);

ReactDOM.render(App, document.getElementById('root'));