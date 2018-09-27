import React from 'react';
import ReactDOM from 'react-dom';

class Conteudo extends React.Component{
render(){
    let conteudo = this.props.conteudos.map(function(value){
        return(
          
          <div className="col s4 m4">
            <div className="card">
              <div className="card-image">
                <img src={value.img}/>
                <span className="card-title">`{value.title}</span>
              </div>
              <div className="card-content">
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
