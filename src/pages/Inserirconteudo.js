import React from 'react';

export default class InserirConteudo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      texto: '',
      imagem:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const form = this.state;
    fetch('http://localhost:2000/form', {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(form), 
  })

     event.preventDefault();

     
}

  

  render() {
    return (
      <div className="row row-inserir-conteudo">

        <div className="divinvisivel">
          <br></br><br></br>
        </div>

        <div className="col s1 m1 l1"></div>
        <div className="col 10 m10 l5">
        <center><h2>Inserir Novo Conteudo</h2></center><hr></hr><br></br>
        

        <form onSubmit={this.handleSubmit}><br></br>
          <label>
            TITULO
            <input
              className="input-inserir"
              name="titulo"
              type="text"
              placeholder ="Insira aqui o titulo do tópico"
              checked={this.state.titulo}
              onChange={this.handleInputChange}
              required />
          </label>
          <br />
          <label>
            TEXTO
            <input
              className="input-inserir"
              name="texto"
              type="text"
              placeholder ="Insira aqui o seu texto"
              value={this.state.texto}
              onChange={this.handleInputChange} 
              required/>
          </label>
          <label>
            Imagem:
            <input
              className="input-inserir"
              name="imagem"
              type="text"
              placeholder ="Insira aqui o link para a imagem do tópico"
              value={this.state.imagem}
              onChange={this.handleInputChange} 
              required/>
          </label>
          
          <br></br>
          <br></br>
          <center><input
              className="waves-effect waves-light btn-large blue botao-insert"
              name="submit"
              type="submit"
              value ="Enviar"
          />
          </center>
        </form>
        
        <div className="divinvisivel">
          <br></br><br></br><br></br>
        </div>
        </div>
        
      </div>
    );
  }
}