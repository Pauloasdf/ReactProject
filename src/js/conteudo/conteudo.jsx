import React from 'react';
//import ReactDOM from 'react-dom';

class Conteudo extends React.Component{
  render(
    
){
    let conteudo = this.props.conteudos.map(function(value,i){  
        return(
          <div className="col s4 m4 conteudo" key={i}>
            <div className="card z-depth-4">
              <div className="card-image">
                <a href={value.link}><img src={value.img} alt={value.alt}/></a>
              </div>
              <div className="card-content">
              <span className="card-title"><b>{value.tituloBloco}</b></span>
                <p>{value.texto}</p>
              </div>
              <div className="card-action">
                
              </div>
            </div>
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
