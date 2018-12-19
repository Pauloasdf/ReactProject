import React from 'react';

// COMPONENTES
import '../App.css';
import Navbar from '../js/navbar/navbar';
import BlocoConteudo from '../js/conteudo/bloco-conteudo';
import DemoCarousel from '../js/conteudo/carousel'
import Footer from '../js/footer/footer';
import Sidemenu from '../js/conteudo/menu-ancora';


export default class App extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(      
                    <div className="row ">
                        <div className="col s9 pagina_central"> 
                            <DemoCarousel />
                            <BlocoConteudo />
                        </div> 
                        <div className="col s3 menu_ancora">
                            <Sidemenu />
                        </div>
                    </div>
              )
             }
}
