import React from 'react';
//import ReactDOM from 'react-dom';

import Conteudo from './conteudo';
import Busca from '../Busca/busca';

class BlocoConteudo extends React.Component{
    constructor(props){
        super(props);
        this.state = {busca: ''}
        this.atualizaBusca = this.atualizaBusca.bind(this);
    }

    atualizaBusca(evento){
        this.setState({busca: evento.target.value})
    }

    render(){
        let conteudos = [
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#1",alt:"",},
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#2",alt:"",},
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#3",alt:"",},
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#4",alt:"",},
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#5",alt:"",},
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#5",alt:"",},
                {img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",tituloBloco:"Primeiro teste",texto:"teste",link:"#7",alt:"",}
            ];
        
          // Declaração de variáveis 

            var auxiliar = [];
            var novaLinha = [];

          // ---------------------
          // Laço gerar os cartoes e fazer a quebra de linha

            for(let k=0;k<conteudos.length;k++){
                auxiliar.push(conteudos[k]);

                if (auxiliar.length === 4){ // se por ventura quisermos mudar a quantidade de cartões por linhas alterar este número aq
                    novaLinha.push(auxiliar);
                    auxiliar = [];
                }else if(k === conteudos.length -1){
                    novaLinha.push(auxiliar);
                }

            }
          // -----------------------------------------------
        
            console.log(novaLinha);
            // var quantidadePLinha = "col s" + this.props.quantidadeRow + " m" + this.props.quantidadeRow;
        return(
            <div>
                <div className="row">
                <Busca atualizaBusca={this.atualizaBusca} busca={this.state.busca}/>   
                </div>
                <div className="row">
                    {/* <Conteudo conteudos={conteudos}/> 
                    <Conteudo conteudos={conteudos}/>  */}
                   
                    <Conteudo conteudos={conteudos}/> 
                </div>
            </div>
        )
    }
}

export default BlocoConteudo;