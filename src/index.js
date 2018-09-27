import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Titulo from './js/titulo/titulo';
import Navbar from './js/navbar/navbar';
import Head from './js/head/head';
import Banner from './js/conteudo/banner';

import BlocoConteudo from './js/conteudo/bloco-conteudo';
let style = "display:inline-block";
let App = (
     
        <div>
          <Head/>
          <Navbar titulo="SyoLearn" cor="red" />
          <div className="container">
            <Titulo titulo="Home"/>


            <Banner />
            
            
            <BlocoConteudo />
            <BlocoConteudo />
            <BlocoConteudo />
            
      
      
          </div>
        </div>
);

ReactDOM.render(App, document.getElementById('root'));