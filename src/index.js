import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Navbar from './js/navbar/navbar';
import BlocoConteudo from './js/conteudo/bloco-conteudo';
import DemoCarousel from './js/conteudo/carousel'
import Footer from './js/footer/footer';
import Sidemenu from './js/conteudo/menu-ancora';


let App = (
        
  <div>
        <Navbar titulo="SyoLearn" cor="red" />
        
        <div className="row ">
      
          <div className="col s9 pagina_central"> 
          <DemoCarousel />
          <BlocoConteudo />
          </div> 
          <div className="col s3 menu_ancora">
          <Sidemenu />
          </div>

        </div>
        <div className="col s12">
        <Footer cor="red"/>
        </div>
  </div>
  
);

ReactDOM.render(App, document.getElementById('root'));