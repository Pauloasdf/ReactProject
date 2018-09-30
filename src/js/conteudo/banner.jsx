import React from 'react';

class Banner extends React.Component{
    render(){
        return(
        //     <div className="container">
        //         <div className="carousel">
        //         <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt=""/></a>
        //         <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt=""/></a>
        //         <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"alt=""/></a>
        //         <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt=""/></a>
        //         <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt=""/></a>
        //       </div>
        //   </div>

 

            // <div >
            

                    
            //         <div className="carousel carousel-slider" id="demo-carousel-indicators" data-indicators="true">
                    
            //             <a className="carousel-item" href="#one!"></a><img width="100%" height="100%" src="C:\Users\user\curso-react\src\img\defult_banner.jpg"/>
                    
            //             <a className="carousel-item" href="#two!"><img src="images/mango.jpg"/></a>
                    
            //             <a className="carousel-item" href="#three!"><img src="images/strawberries.jpg"/></a>
                    
            //             <a className="carousel-item" href="#four!"><img src="images/currant.jpg"/></a>
                    
            //             <a className="carousel-item" href="#five!"><img src="images/mango.jpg"/></a>
                    
            //         </div>
            
            // </div>
 
  
 <div className="carousel carousel-slider" id="demo-carousel-content" data-indicators="true" >
   <a className="carousel-item" href="#one!"></a>
   <img src="C:\Users\user\curso-react\src\img\default_banner.jpg" width="100%" height="100%" className="imagem_banner"/>
    <div className="carousel-fixed-item center">
      <h2 className="white-text"> Título do Banner</h2>
       <p className="white-text">Descrição</p>
       <a className="btn waves-effect orange lighten-3 black-text darken-text-2">Saiba Mais</a>
     </div>
     <a className="carousel-item" href="#two!"><img src="C:\Users\user\curso-react\src\img\default_banner.jpg"/>
       </a>
    <a className="carousel-item" href="#two!"><img src="C:\Users\user\curso-react\src\img\defalult_banner.jpg"/>
       </a>
   </div>
 

        )
    }
}

export default Banner;
