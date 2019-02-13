import React from 'react';
import {createStore,combineReducers} from 'redux';


class Redux extends React.Component{
    componentDidMount() {
        fetch('http://localhost:2000/conteudos')
          .then(cartao => cartao.json())
          .then(data => {
              var i = 0;
              var tamanhoArray = data.length;
              while (i<tamanhoArray){
          const {id,tituloBloco,texto,link,img,alt} = data[i]
          store.dispatch(procurarConteudosBanco({id,tituloBloco,texto,link,alt,img}))
            i = i + 1
        }
        console.log(store.getState());
            });
    }
    render(){
        return(<h1> hey </h1>)
    }
}

const procurarConteudosBanco = (
    {id = 0,
     tituloBloco = '',
     texto='',
     img='',
     alt='',
     link=''
    } = {}
  ) =>({
    type: 'SEARCH',
    conteudos:{
        id,
        tituloBloco,
        texto,
        img,
        alt,
        link
    },
 })

const conteudosDefaultState = [];

const conteudosReducer = (state = conteudosDefaultState,action)=>{
    switch (action.type){
        case 'SEARCH':
            return state.concat(action.conteudos);
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        conteudos: conteudosReducer
    })
);

export default Redux;