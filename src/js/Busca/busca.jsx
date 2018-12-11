import React from 'react';

class Busca extends React.Component{

    constructor(props){
        super(props);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    atualizaBusca(evento){
        this.props.atualizaBusca(evento);
        
    }

    onSubmit(evento){
        this.props.onSubmit(evento);
        evento.preventDefault();
    }

    render(){


        return(
            <form onSubmit={this.onSubmit}>
                <div className="col s2"></div>
                <div className="input-field col s8">
                    {/* <label>Busca</label> */}
                    <input placeholder="Digite a sua Busca" type="text" value={this.props.busca} onChange={this.atualizaBusca} className="span-input-label-pesquisa"/> 
                   
                </div>
                <div className="col s1">
                        {/* <center><button type="submit" className="waves-effect waves-light btn-large input-field botao_pesquisar"> </button></center> */}
                </div> 
                <div className="col s1"></div>

                {/* <p>{this.props.busca}</p> */}
            </form>
        )

    }

}

export default Busca;