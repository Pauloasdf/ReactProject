import React from 'react'

export default class ContentLoad extends React.Component{
    
    render() {
           return(      
                    <div className="row ">
                        <div className="col s12 pagina_central"> 
                            <div className="col m2 l2"></div>
                            <div className="col s12 m8 l8">
                                <center><h1>{this.props.titulo}</h1></center>
                                <hr></hr>
                                <br></br>
                                <center><img src={this.props.imagem} className="imagem-conteudo-unico" alt={this.props.alt}></img></center>
                                <br></br>
                                <p>{this.props.texto}</p>
                                <br></br>
                                <center><a className="waves-effect waves-light btn-large blue botao-insert">Atualizar Conteudo</a></center>
                            </div>
                        </div> 
                    </div>              
                    )
             }
}


