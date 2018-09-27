import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './nav-menu';
class Navbar extends React.Component{
    render(){
        let menu = [
            {titulo:"Conceitos Iniciais", link:"#conceitos"},
            {titulo:"Empresa", link:"#empresa"},
            {titulo:"Módulos", link:"#modelos"},
            {titulo:"O que fazer?", link:"#search"},
        ];

        let corNavbar = "nav-wrapper "+ this.props.cor; 
        return( 
        <nav>
            <div className={corNavbar}>
                <div className="container">
                    <a href="#" className="brand-logo">{this.props.titulo}</a>
                    <NavMenu menu={menu}/>
                    
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar;