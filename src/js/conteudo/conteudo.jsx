import React from 'react';
import ReactDOM from 'react-dom';

class Conteudo extends React.Component{
    render(){
        let conteudo = this.props.conteudos.map(function(value){
            return(
                <div className="card">
                        <a href={value.link}>
                            <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={value.img}/>
                            </div>

                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{value.tituloBloco}<i class=""></i></span>
                                <p>{value.texto}</p>
                            </div>
                        </a>
                </div>
                
            );
        });

        return(
            
                <div>
                    {conteudo}
                </div>
            
        )
    }
}


export default Conteudo;