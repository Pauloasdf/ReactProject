import React from 'react';

class Banner extends React.Component{
    render(){
        return(
  
 <div className="carousel carousel-slider" id="demo-carousel-content" data-indicators="true" >
   <a className="carousel-item" href="#one!"></a>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVlwuVcB7d0HV1Wwh6D0q_qvpio4OArOng9D1WuE5ARa5xZjs" width="100%" height="100%" className="imagem_banner"/>
    <div className="carousel-fixed-item center">
      <h2 className="white-text"> Título do Banner</h2>
       <p className="white-text">Descrição</p>
       <a className="btn waves-effect orange lighten-3 black-text darken-text-2">Saiba Mais</a>
     </div>
     <a className="carousel-item" href="#two!"><img src="C:\Users\user\curso-react\src\img\img_1_carousel.jpg"/>
       </a>
    <a className="carousel-item" href="#two!"><img src="C:\Users\user\curso-react\src\img\img_1_carousel.jpg"/>
       </a>
   </div>
 

        )
    }
}

export default Banner;
