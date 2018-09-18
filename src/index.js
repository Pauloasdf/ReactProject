import React from 'react';
import ReactDOM from 'react-dom';

import Titulo from './js/titulo/titulo';
import Navbar from './js/navbar/navbar';
import Head from './js/head/head';

import BlocoConteudo from './js/conteudo/bloco-conteudo';

let App = (
    <div>
        <Head />
        <div>
            <Navbar titulo="React" cor="orange"/>
            <div className="container">
                <Titulo titulo="React é Foda"/>
                <div className="row">
                    <div className="col m4">
                        <BlocoConteudo />
                    </div>

                </div>
            </div>
        </div>
    </div>
)

ReactDOM.render(App, document.getElementById('root'));