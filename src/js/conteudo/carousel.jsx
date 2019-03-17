import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
// https://www.npmjs.com/package/react-responsive-carousel

class DemoCarousel  extends Component {
    constructor(props){
    super(props);
    this.state = {}

    // PERSONIFICAÇÃO 
    this.state.arrastar = true
    this.state.tempo_transicao = 500
    this.state.intervalo = 6000
    this.state.rodar_sozinho = true
    this.state.loop = true
    this.state.mostrar_thumbs = false
    this.state.mostrar_status = false
    this.state.ajustar_altura = true
}
    render() 
    
    {
        return (
            <div className="carousel">
                            <Carousel showThumbs={this.state.mostrar_thumbs} infiniteLoop={this.state.loop} emulateTouch={this.state.arrastar} showStatus={this.state.mostrar_status}
                            interval={this.state.intervalo} autoPlay={this.state.rodar_sozinho} transitionTime={this.state.tempo_transicao} dynamicHeight={this.state.ajustar_altura}>
                                <div>
                                    <img src="http://sances.com.br/wp-content/uploads/2017/02/leads-002.jpg" alt="" />
                                    {/* <p className="legend">Imagem 1</p> */}
                                </div>
                                <div>
                                    <img src="https://pactosolucoes.com.br/blog/wp-content/uploads/2016/05/crm-para-academia.jpg" alt="" />
                                    {/* <p className="legend">Imagem 2</p> */}
                                </div>
                                <div>   
                                    <img src="http://docs.resultamais.com.br/wp-content/uploads/2018/12/img_blog-1-002.png" alt="" />
                                    {/* <p className="Imagem">Imagem 3</p> */}
                                </div>
                            </Carousel>
            </div>
        );
    }
};
export default DemoCarousel;
