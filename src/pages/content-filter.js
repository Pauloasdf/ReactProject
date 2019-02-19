import React from 'react'
import ContentLoad from './content';


function getUrlVars() {
    const vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const idURL = getUrlVars()["id"];

export default class ContentFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {titulo:'', imagem: '', texto: '', alt: '',id:0};
    }

    componentDidMount() {
        fetch('http://localhost:2000/conteudos')
          .then(cartao => cartao.json())
          .then(data => {  
            var i = 0
             for(i=0;i<data.length;i++){
                    if (data[i].id === Number(idURL)) {
                        this.setState({ 
                            idConteudo:data[i].id,
                            titulo:data[i].tituloBloco,
                            imagem:data[i].img,
                            texto:data[i].texto,
                            alt:data[i].alt })
                    }
            }
        });
      }
    
    render() {
        
        const titulo = this.state.titulo;
        const imagem = this.state.imagem;
        const texto = this.state.texto;
        const alt = this.state.alt;
        const idConteudo = this.state.idConteudo;

        return(      
            <div>
                <ContentLoad titulo = {titulo} imagem={imagem} texto ={texto} alt={alt} id={idConteudo}/>
            </div>        
        )
             }
}


