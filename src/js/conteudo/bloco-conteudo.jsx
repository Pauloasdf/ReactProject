import React from 'react';
//import ReactDOM from 'react-dom';

import Conteudo from './conteudo';
import Busca from '../Busca/busca';

class BlocoConteudo extends React.Component{
    constructor(props){
        super(props);
        this.state = {cliques: 0, busca: '', dados: [], servidor: [], conteudos: []};
        this.addClique = this.addClique.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      componentDidMount() {
        fetch('http://localhost:2000/conteudos')
          .then(cartao => cartao.json())
          .then(data => {
              this.setState({ conteudos:data })
              console.log(data)
            });
      }

      addClique(){ 
        this.setState((prevState)=>({
          cliques: prevState.cliques + 1
        }));
      }

    atualizaBusca(evento){
        this.setState({busca: evento.target.value})
    }

    onSubmit(evento){   
        console.log(this.state.busca);
        evento.proventDefaul(); 
    }
    render(){
 
        return(
            <div>
                <div className="row">
                <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>   
                </div>
                <div className="row">

                    <Conteudo conteudos={this.state.conteudos}/> 
                </div>
            </div>
        )
    }
}

export default BlocoConteudo;