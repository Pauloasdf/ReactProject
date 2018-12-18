import React from 'react';

class Sidemenu extends React.Component{
    
    render(){

        return(
            <div>
                    <h3>Recentes</h3>
                    <div className='divider'></div>
                <div>
                    <div class="card horizontal">
                        <div class="card-image">
                            <img src="https://lorempixel.com/120/120/nature/6" />
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
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