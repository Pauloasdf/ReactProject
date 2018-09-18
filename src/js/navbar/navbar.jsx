import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './nav-menu';
class Navbar extends React.Component{
    render(){
        let menu = [
            {titulo:"Home", link:"#home"},
            {titulo:"Contato", link:"#contato"},
            {titulo:"Sobre", link:"#Sobre"},
            {titulo:"Galeria", link:"#Galeria"},
            {titulo:"Notícias", link:"#news"},
            {titulo:"Colaborador", link:"#colab"}

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