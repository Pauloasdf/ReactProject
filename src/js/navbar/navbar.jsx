import React from 'react';
import NavMenu from './nav-menu';
class Navbar extends React.Component{
    render(){
        let menu = [
            {titulo:"Home", link:"http://localhost:3000/"},
            {titulo:"Empresa", link:"http://localhost:3000/empresa"},
            // {titulo:"Módulos", link:"http://localhost:3000/modulos"},
            // {titulo:"Conceitos", link:"http://localhost:3000/base"},
        ];

        let corNavbar = "nav-wrapper "+ this.props.cor; 
        return( 
        <nav>
            <div className={corNavbar}>
                <div className="container">
                    <img src="https://www.syonet.com.br/assets/img/site/common/img/selo.png" alt="imagem não carregou" className="imagem-logo"></img>
                    <a href="http://localhost:3000/" className="brand-logo">{this.props.titulo}</a>
                    <NavMenu menu={menu}/>
                    
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar;