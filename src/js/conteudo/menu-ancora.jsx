import React from 'react';

class Sidemenu extends React.Component{
    
    render(){

        return(
            <div>
                    <h3>Recentes</h3>
                    <div className='divider'></div>
                <div>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://lorempixel.com/120/120/nature/6" alt="imagem nao encontrada."/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            I am a very simple card. I am good at containing small bits of information.
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
    }   
}

export default Sidemenu;