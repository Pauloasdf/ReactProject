import React from 'react';

class Banner extends React.Component{
    render(){
        return(
  
 <div className="carousel carousel-slider" id="demo-carousel-content" data-indicators="true" >
   <a className="carousel-item" href="#one!"></a>
   <img src="http://ptinformatica.com/wp-content/uploads/2016/09/banner-informatica.jpg" width="100%" height="100%" className="imagem_banner" alt="hey"/>
   
    <div className="carousel-fixed-item right">
      <h2 className="dark-text"> Título do Banner</h2>
       <p className="white-text">Descrição</p>
       <a className="btn waves-effect orange lighten-3 black-text darken-text-2">Saiba Mais</a>
     </div>
     <a className="carousel-item" href="#two!"><img src="C:\Users\user\curso-react\src\img\img_1_carousel.jpg" alt="hey2"/>
       </a>
    <a className="carousel-item" href="#two!"><img src="C:\Users\user\curso-react\src\img\img_1_carousel.jpg" alt="hey3"/>
       </a>
   </div>
 

        )
    }
}

export default Banner;
