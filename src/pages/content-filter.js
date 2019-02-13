import React from 'react'
import ContentLoad from './content';


function getUrlVars() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const id = getUrlVars()["id"];

export default class ContentFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {titulo:'', imagem: '', texto: '', alt: ''};
    }

    componentDidMount() {
        fetch('http://localhost:2000/conteudos')
          .then(cartao => cartao.json())
          .then(data => {
             this.setState({ 
                titulo:data[id-1].tituloBloco,
                imagem:data[id-1].img,
                texto:data[id-1].texto,
                alt:data[id-1].alt })
            });
      }
    
    render() {
        
        const titulo = this.state.titulo;
        const imagem = this.state.imagem;
        const texto = this.state.texto;
        const alt = this.state.alt;
        

        return(      
            <div>
                <ContentLoad titulo = {titulo} imagem={imagem} texto ={texto} alt={alt}/>
            </div>        
        )
             }
}


