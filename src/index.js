import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Titulo from './js/titulo/titulo';
import Navbar from './js/navbar/navbar';
import Head from './js/head/head';

import BlocoConteudo from './js/conteudo/bloco-conteudo';

let App = (
    <div>
        <Head />
        <div>
            <Navbar titulo="React" cor="red"/>
            <div className="container"> 
            
            <Titulo titulo="React é Foda"/>
            
                <div className="row">
                    <div className="col m12">
                        <BlocoConteudo />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
)

ReactDOM.render(App, document.getElementById('root'));