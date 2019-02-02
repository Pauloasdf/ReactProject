import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter, Switch  } from 'react-router-dom';

import './App.css';

// Router components
import App from './pages/App';
import PaginaConteudo from './pages/paginaconteudo';
import Empresa from './pages/empresa';
import Modulos from './pages/modulos';
import Base from './pages/base';
import Home from './pages/Home'

ReactDOM.render((
  
  <BrowserRouter history={HashRouter}>
    <Home>
      <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/paginaconteudo" component={PaginaConteudo}/>
            <Route path="/empresa" component={Empresa}/>
            <Route path="/modulos" component={Modulos}/>
            <Route path="/base" component={Base}/>
      </Switch>
    </Home>
  </BrowserRouter>
  
  ), document.getElementById('root'));
