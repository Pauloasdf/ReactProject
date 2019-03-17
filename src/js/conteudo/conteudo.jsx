import React from 'react';

class Conteudo extends React.Component{
  render(
){
    const conteudos = this.props.conteudos
    const conteudo = this.props.conteudos.map(function(value,i){ 
        return(
          <a href={'content?id=' + conteudos[i].id} key={i} >
          <div className="col s4 m4 conteudo ">
            <div className="card z-depth-4 conteudohover">
              <div className="card-image">
                <img src={value.img} className="imagem-conteudo-formatar" alt={value.alt}/>
              </div>
              <div className="card-content">
              <span className="card-title"><strong>{value.tituloBloco}</strong></span>
              </div>
              <div className="card-action">
                
              </div>
            </div>
          </div>       
          </a>
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
// Cartão mais simples, apenas com texto e mais compacto

// const conteudo = this.props.conteudos.map(function(value,i){  
//   const valor = value;
//      return(
       
//        <div className="col s4 m4 conteudo" key={i} >
       
//        <a href={'content?id=' + value.id}>

//          <div className="card z-depth-4">
//            {/* <div className="card-image">
//              <img src={value.img} alt={value.alt} className="image-cartao-pequena"/>
//            </div> */}
//            <div className="card-content">
//            <center><span className="card-title"><strong>{value.tituloBloco}</strong></span></center>
//            </div>                
//            </div>

         
//          </a>

//        </div> 
       
//      );
     
//  });