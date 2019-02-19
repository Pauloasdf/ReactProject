import React from 'react';

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
              this.setState({ servidor:data })
            });
      }

      addClique(){ 
        this.setState((prevState)=>({
          cliques: prevState.cliques + 1
        }));
      }

    atualizaBusca(evento){
        this.setState({busca: evento.target.value})
        if(evento.target.value === "")
            this.setState({dados: this.state.servidor})
    }

    onSubmit(evento){   
        
        evento.preventDefault();

        let busca = this.state.busca;
        let dados =  this.state.servidor;
        let novaLista = dados.filter(function(item){
            if(item.tituloBloco.toUpperCase().indexOf(busca.toUpperCase())> -1 ){
                return item;
            }
            if(busca === []){
                return this.state.servidor;
            }
            return '';
        });

        this.setState({conteudos: novaLista})

    }

    render(){
 
        return(
            <div>
                <div className="row busca">
                <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>   
                </div>
                <div className="row">
                    <Conteudo conteudos={this.state.conteudos}/> 
                </div>
                <br></br><br></br>
                
            </div>
        )
    }
}

export default BlocoConteudo;