import React from 'react';
//import ReactDOM from 'react-dom';

class Titulo extends React.Component{
    //método principal -- render + return
    render(){
        return(<h1> {this.props.titulo} </h1>)
    }
}

export default Titulo;