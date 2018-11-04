import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Navbar from './js/navbar/navbar';
import BlocoConteudo from './js/conteudo/bloco-conteudo';
import DemoCarousel from './js/conteudo/carousel'
import Footer from './js/footer/footer';


let App = (
        
  <div>
        <Navbar titulo="SyoLearn" cor="red" />
        
        <div className="row ">
        <DemoCarousel />
          <div className="col s2 menu_ancora">
          {/* <menuAncora /> */}
          </div>
    
          <div className="col s10 pagina_central">
          
          <BlocoConteudo />
          </div> 
        </div>
        <Footer cor="red"/>
  </div>
  
);

ReactDOM.render(App, document.getElementById('root'));