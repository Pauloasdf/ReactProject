import React from 'react';

class Busca extends React.Component{

    constructor(props){
        super(props);
        this.atualizaBusca = this.atualizaBusca.bind(this);
    }

    atualizaBusca(evento){
        this.props.atualizaBusca(evento);
    }

    render(){


        return(
            <form>
                <br></br><br></br>
                <div className="col s2"></div>
                <div className="input-field col s8">
                    {/* <label>Busca</label> */}
                    <input placeholder="Digite a sua Busca" type="text" value={this.props.busca} onChange={this.atualizaBusca} className="span-input-label-pesquisa"/> 
                   
                </div>
                <div className="col s2"></div>
            </form>
        )

    }

}

export default Busca;