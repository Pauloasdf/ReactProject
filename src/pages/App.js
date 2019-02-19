import React from 'react';

// COMPONENTES
import '../App.css';
import BlocoConteudo from '../js/conteudo/bloco-conteudo';
import DemoCarousel from '../js/conteudo/carousel'
import Sidemenu from '../js/conteudo/menu-ancora';

function abrirPagina(){
    window.open('http://localhost:3000/insert')
}
export default class App extends React.Component{
    render() {
        return(      
                    <div className="row">
                        <div className="col s12 m9 l9 pagina_central"> 
                            <DemoCarousel />
                            <BlocoConteudo />
                        </div> 
                        <div className="col s3 menu_ancora menulateraldireito">
                            <Sidemenu />
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="texto-inserir">
                                    <div className="col s9 m9 l9">
                                    <br></br><br></br>
                                        <h5>Não encontrou o que procurava?<br></br>
                                        Ajude-nos a expandir a base inserindo um novo tópico :)</h5>
                                    </div>
                                    <div className="col s3 m3 l3">
                                    <br></br><br></br><br></br>
                                        <a className="waves-effect waves-light btn-large blue" onClick={abrirPagina}>Inserir</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              )
             }
}
