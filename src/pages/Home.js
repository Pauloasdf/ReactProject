import React from 'react';
import Navbar from '../js/navbar/navbar';
import Footer from '../js/footer/footer';

export default class Home extends React.Component{
    render() {
        return(      
            <div>
            <Navbar titulo="SyoLearn" cor="red" />         
            {/* <div className="row ">
                <div className="col s9 pagina_central"> 
                    <DemoCarousel />
                    <BlocoConteudo />
                </div> 
                <div className="col s3 menu_ancora">
                    <Sidemenu />
                </div>
            </div> */}
                {this.props.children}
            <div className="col s12">
                <Footer cor="red"/>
            </div>
        </div>
              )
             }
}
