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
import InserirConteudo from './pages/Inserirconteudo'
import Redux from './redux/redux'
// import ContentLoad from './pages/content';
import ContentFilter from './pages/content-filter';
// import Destructuring from './redux/destructuring'

ReactDOM.render((
  
  <BrowserRouter history={HashRouter}>
    <Home>
      <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/paginaconteudo" component={PaginaConteudo}/>
            <Route path="/empresa" component={Empresa}/>
            <Route path="/modulos" component={Modulos}/>
            <Route path="/base" component={Base}/>
            <Route path="/insert" component={InserirConteudo}/>
            <Route path="/redux" component={Redux}/>
            <Route path="/content" component={ContentFilter}/>
      </Switch>
    </Home>
  </BrowserRouter>
  
  ), document.getElementById('root'));
