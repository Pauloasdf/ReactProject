import React from 'react';

class Sidemenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

    const menuconteudos = this.props.novosconteudos;
    const menuconteudo = this.props.novosconteudos.map(function(value,id){ 
        return(
            <a href={'content?id=' + value.id} key={id}>
                    <div className="card horizontal sideconteudohover">
                        {/* <div className="card-image">
                            <img src={value.img} alt={value.alt}/>
                        </div> */}
                        {/* <div className="card-stacked"> */}
                            <div className="card-content">{value.tituloBloco}</div>
                        {/* </div> */}
                    </div>
            </a>
        )
    })

        return(
        [menuconteudo]
        )
    }   
}

export default Sidemenu;