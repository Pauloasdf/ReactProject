import React from 'react';

class Busca extends React.Component{

    constructor(props){
        super(props);
        this.atualizaBusca = this.atualizaBusca.bind(this);
    }

    atualizaBusca(evento){
        this.props.atualizaBusca(evento);
    }

    onSubmit(evento){
        this.props.onSubmit(evento);
    }

    render(){


        return(
            <form onSubmit={this.onSubmit}>
                <br></br><br></br>
                <div className="col s1"></div>
                <div className="input-field col s10">
                    {/* <label>Busca</label> */}
                    <input placeholder="Digite a sua Busca" type="text" value={this.props.busca} onChange={this.atualizaBusca} className="span-input-label-pesquisa"/> 
                   
                </div>
                <div className="row">
                    <div className="col s4">
                    </div>
                        <div className="col s4">
                                <center> <a className="waves-effect waves-light btn-large botao-buscar">Buscar</a></center>
                        </div>
                </div>
            </form>
        )

    }

}

export default Busca;