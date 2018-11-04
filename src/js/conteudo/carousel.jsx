import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
// https://www.npmjs.com/package/react-responsive-carousel

class DemoCarousel  extends Component {
    constructor(props){
    super(props);
    this.state = {}

    // PERSONIFICAÇÃO 
    this.state.arrastar = true
    this.state.tempo_transicao = '500'
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
                                    <img src="https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg" />
                                    {/* <p className="legend">Imagem 1</p> */}
                                </div>
                                <div>
                                    <img src="https://http2.mlstatic.com/painel-paisagem-praia-coqueiros-400-x-200-multi-D_NQ_NP_203525-MLB25461274818_032017-F.jpg" />
                                    {/* <p className="legend">Imagem 2</p> */}
                                </div>
                                <div>   
                                    <img src="https://img.elo7.com.br/product/original/115E580/painel-paisagem-g-frete-gratis-decoracao-de-festa.jpg" />
                                    {/* <p className="Imagem">Imagem 3</p> */}
                                </div>
                            </Carousel>
            </div>
        );
    }
};
export default DemoCarousel;
