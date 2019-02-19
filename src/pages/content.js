import React from 'react'

export default class ContentLoad extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modo: 'MOSTRAR',
            titulo: '',
            texto: '',
            imagem:'',
            id:0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toogleUpdate = this.toogleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      toogleUpdate(){
          this.setState({modo:"UPDATE"});
          console.log(this.state.modo)
      }

      handleInputChange(event) {
        const idConteudo = this.props.id;
        const target = event.target;
        const value = target.value;
        const novoConteudo = target.name;
        this.setState({
          [novoConteudo]: value,
          id:idConteudo
        });
      }


      handleSubmit = event => {
        const att = this.state;
        fetch('http://localhost:2000/update', {
          method: "POST", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
              "Content-Type": "application/json",
          },
          redirect: "follow",
          referrer: "no-referrer",
          body: JSON.stringify(att), 
      })
      this.setState({modo:"MOSTRAR"}); 
      window.location.reload();
    }

    handleDelete(){
        const del = this.state
                let r= window.confirm("Tem certeza que deseja excluir este conteúdo? A ação não pode ser desfeita!");
                if (r===true)
                {
                    fetch('http://localhost:2000/delete', {
                        method: "POST", 
                        mode: "cors", 
                        cache: "no-cache", 
                        credentials: "same-origin", 
                        headers: {
                            "Content-Type": "application/json",
                        },
                        redirect: "follow",
                        referrer: "no-referrer",
                        body: JSON.stringify(del), 
                    })
                }
                else
                {
                    this.setState({modo:"MOSTRAR"}); 
                    window.location.reload();
                }
            }


    render(){
        this.state.id = this.props.id
        switch(this.state.modo){
            case 'UPDATE':
                return(
                    <div>
                        <div className="row ">
                            <div className="col s12 pagina_central"> 
                                <div className="col m2 l2"></div>
                                <div className="col s12 m8 l8">
                                    <center><h1>{this.props.titulo}</h1></center>
                                    <hr></hr>
                                    <br></br>
                                    <center><img src={this.props.imagem} className="imagem-conteudo-unico" alt={this.props.alt}></img></center>
                                    <br></br>
                                    <p>{this.props.texto}</p>
                                    <br></br>
                                    <center><a className="waves-effect waves-light btn-large blue botao-insert" onClick={this.toogleUpdate}>Atualizar Conteudo</a></center>
                                </div>
                                <h5>Id: {this.props.id}</h5>
                            </div> 
                            
                        </div>     

                        <div className="row ">
                        <div className="col s12 pagina_central"> 
                            <div className="col m2 l2"></div>
                                <div className="col s12 m8 l8">
                                            
                                            <form onSubmit={this.handleSubmit}><br></br>
                                                <h1>
                                                <input
                                                    className="input-insert-titulo"
                                                    name="titulo"
                                                    type="text"
                                                    placeholder = {this.props.titulo}
                                                    onChange={this.handleInputChange} 
                                                    required />
                                                </h1>
                                                <hr></hr>
                                                <br />
                                                <label>
                                                    Texto:
                                                    <textarea 
                                                    id="textarea1" 
                                                    className="materialize-textarea input-insert-textarea" 
                                                    name="texto" 
                                                    placeholder ={this.props.texto} 
                                                    defaultValue = {this.props.texto}
                                                    onChange={this.handleInputChange} 
                                                    required/>   
                                                </label>
                                                <br></br>
                                                <label>
                                                    Imagem
                                                    <input
                                                    className="input-insert"
                                                    name="imagem"
                                                    type="text"
                                                    placeholder = {this.props.imagem}
                                                    onChange={this.handleInputChange} 
                                                    required/>
                                                </label>
                                                
                                                
                                                
                                                <br></br>
                                                <br></br>
                                                <center><input
                                                    className="waves-effect waves-light btn-large blue botao-insert"
                                                    name="submit"
                                                    type="submit"
                                                    value ="Atualizar"
                                                />
                                                </center>
                                            </form>
                                </div>
                        </div>
                        </div>
                    </div>    
                );

            case 'MOSTRAR':
                return(
                <div className="row ">
                        <div className="col s12 pagina_central"> 
                            <div className="col m2 l2"></div>
                            <div className="col s12 m8 l8">
                                <center><h1>{this.props.titulo}</h1></center>
                                <hr></hr>
                                <br></br>
                                <center><img src={this.props.imagem} className="imagem-conteudo-unico" alt={this.props.alt}></img></center>
                                <br></br>
                                <p>{this.props.texto}</p>
                                <br></br>
                               <center> <a className="waves-effect waves-light btn-large blue botao-update" onClick={this.toogleUpdate}>Atualizar Conteudo</a>
                                <a className="waves-effect waves-light btn-large red botao-excluir" onClick={this.handleDelete}>Excluir</a></center>
                            </div>
                            <h5>Id: {this.props.id}</h5>
                        </div> 
                        
                    </div>     
                );
            default:
                return('Modo Indefinido');
        }
    }
}


