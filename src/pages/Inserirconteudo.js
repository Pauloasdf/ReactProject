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
console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const form = this.state;

    axios.post(`http://localhost:2000/form`, { form })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
          console.log(error.response)
      })
      console.log(this.state)
  }

  

  render() {
    return (
      <form action="http://localhost:2000/form" method="post" onSubmit={this.handleSubmit}>
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