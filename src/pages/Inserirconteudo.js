import React from 'react';
import axios from 'axios';

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
      <form onSubmit={this.handleSubmit}>
        <label>
          TITULO
          <input
            name="titulo"
            type="text"
            placeholder ="Insira aqui o titulo do tópico"
            checked={this.state.titulo}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          TEXTO
          <input
            name="texto"
            type="text"
            placeholder ="Insira aqui o seu texto"
            value={this.state.texto}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Imagem:
          <input
            name="imagem"
            type="text"
            placeholder ="Insira aqui o link para a imagem do tópico"
            value={this.state.imagem}
            onChange={this.handleInputChange} />
        </label>
        <input
            name="submit"
            type="submit"
            value ="Enviar"
        />
      </form>
    );
  }
}