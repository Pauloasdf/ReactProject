import React,{Fragment} from 'react';
//import ReactDOM from 'react-dom';


class NavMenu extends React.Component{
    
    
    
    render(){
        function apagarSessao(){
            sessionStorage.clear();
            document.location.href = 'http://localhost:3000/newUser'
        }

        
        let lista = this.props.menu.map(function(value){
            return(<li key={value.titulo}><a href={value.link}>{value.titulo}</a></li>);
        });
        return (
            <ul id="nav-mobile" className="right">
             {sessionStorage.getItem('usuario') !== {} && sessionStorage.getItem('usuario') !== null &&
            <Fragment>
            {lista}
           
                <li><a onClick={apagarSessao}>Sair</a></li>
             </Fragment>
             }
            </ul>
        )
    }
}

export default NavMenu;