import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Titulo from './js/titulo/titulo';
import Navbar from './js/navbar/navbar';
//import Head from './js/head/head';
import Banner from './js/conteudo/banner';
import Footer from './js/footer/footer'

import BlocoConteudo from './js/conteudo/bloco-conteudo';


let App = (
        
        // <div>
         
        //   <Navbar titulo="SyoLearn" cor="red" />
        //   <div className="container">
        //     <Titulo titulo="Home"/>

            
        //     <Banner />
          
        //     <BlocoConteudo />

        //     </div>

        //   </div>
        
  <div>
        <Navbar titulo="SyoLearn" cor="red" />
        {/* <Titulo titulo="Home"/> */}
        
        <div class="row">
    
          <div class="col s2">
            
          </div>
    
          <div class="col s10 pagina_central">
          <Banner />
          <BlocoConteudo />
          </div> 
        </div>
        <Footer cor="red"/>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));