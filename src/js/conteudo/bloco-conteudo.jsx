import React from 'react';
import ReactDOM from 'react-dom';

import Conteudo from './conteudo';

class BlocoConteudo extends React.Component{
    render(){
        let conteudos = [
            {
            img : "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg",
            tituloBloco:"Primeiro Cartão",
            texto:"Realmente este lugar é muito acolchegante.",
            link:"#1"
            },
                // {
                // img : "https://uploads.spiritfanfics.com/fanfics/historias/201612/aleatorias-aleatorias-7540241-311220162235.png",
                // tituloBloco:"Second Cartão",
                // texto:"Este lugar já não parece tão bom assim.",
                // link:"#2"
                // },
                // {
                // img : "https://static.noticiasaominuto.com.br/stockimages/1920/naom_5b38be2d748ce.jpg",
                // tituloBloco:"Terceiro Cartão",
                // texto:"Talvez este seja ainda melhor que o primeiro",
                // link:"#3"
                // }
            
        ]
        return(
            <div className="row">
                <Conteudo conteudos={conteudos}/> 
                <Conteudo conteudos={conteudos}/> 
                <Conteudo conteudos={conteudos}/> 
            </div>
        )
    }
}

export default BlocoConteudo;