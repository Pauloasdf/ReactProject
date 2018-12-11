import React from 'react';

class Sidemenu extends React.Component{
    
    render(){
        // let top10 = [
        //     {tituloBloco:"Primeiro teste",link:"#1"},
        //     {tituloBloco:"Segundo teste",link:"#1"},
        //     {tituloBloco:"Terceiro teste",link:"#1"},
        //     {tituloBloco:"Quarto teste",link:"#1"},
        //     {tituloBloco:"Quinto teste",link:"#1"},
        //     {tituloBloco:"Sexto teste",link:"#1"},
        //     {tituloBloco:"Sétimo teste",link:"#1"},
        //     {tituloBloco:"Oitavo teste",link:"#1"},
        //     {tituloBloco:"Nono teste",link:"#1"},
        //     {tituloBloco:"Décimo teste",link:"#1"}
        // ];


        return(
            <div>
                             
                <div className="texto-sidemenu"></div>
                    <div className="section">
                        <h5>RECENTES</h5>
                        <div className="divider"></div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>
                    <div className="section">
                        <h5>MAIS VISTOS</h5>
                        <div className="divider"></div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>
                    <div className="section">
                        <h5>TAGS</h5>
                        <div className="divider"></div>

                        
                        
                    </div>
                
                <div className="chip">
                    <i className="close material-icons">SQL</i>
                </div>
                <div className="chip">
                    <i className="close material-icons">LINUX</i>
                </div>
                <div className="chip">
                    <i className="close material-icons">COMANDOS</i>
                </div>
                <div className="chip">
                    <i className="close material-icons">CAMPANHAS</i>
                </div>
                <div className="chip">
                    <i className="close material-icons">CIC V2</i>
                </div>
                

            </div>
        )
    }   
}

export default Sidemenu;