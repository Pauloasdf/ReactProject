import React from 'react';

class Banner extends React.Component{
    render(){
        return(
            <div className="container">
                <div class="carousel">
                <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
              </div>
          </div>
        )
    }
}

export default Banner;