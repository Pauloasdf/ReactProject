import React from 'react';
import ReactDOM from 'react-dom';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Head from './head/head';
let App = (
    <div>
        <Head />
        <div>
            <Navbar />
            <div className="container">
                <Titulo />
            </div>
        </div>
    </div>
)

ReactDOM.render(App, document.getElementById('app'));