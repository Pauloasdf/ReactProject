import React from 'react';

class Footer extends React.Component{
    render(){
    let corFooter = "page-footer footer nav-wrapper fixed "+ this.props.cor; 
    
        return(
                        <footer className={corFooter}>
                    <div className="container">
                        <div className="row">

                        <div className="col s12 m6 l6 desabilitar-texto">
                            <p className="grey-text text-lighten-4"> O SyoLearn foi produzido apenas como um trabalho de conclusão de curso, sem fins lucrativos. Sinta-se à vontade para visitar o autor em suas redes sociais.</p>
                        </div>

                        <center>
                            <div className="col s12 m6 l6 box">
                            {/* <nav>
                                <ul className="adaptavel-box">
                                    <li className="facebook"> */}
                                        <a href="https://www.facebook.com/pauloasdf.pires" className="facebook">
                                        <img src="https://i.pinimg.com/originals/9b/be/be/9bbebe7aec597334e7d5ffeb6d735e9b.png" className="imagem-footer"></img>
                                        </a>
                                    {/* </li>
                                    <li> */}
                                        <a href="https://github.com/Pauloasdf" className="github">
                                        <img src="https://www.shareicon.net/download/2015/09/02/94536_mark.ico" className="imagem-footer"></img>
                                        </a>
                                    {/* </li>
                                    <li> */}
                                        <a href="https://twitter.com/paulopiresavila" className="twitter">
                                        <img src="https://africatechreport.com/wp-content/uploads/2018/06/twitter_PNG1.png" className="imagem-footer twitter"></img>
                                        </a>
                                    {/* </li>
                                    <li> */}
                                        <a href="https://www.linkedin.com/in/paulo-pires-de-avila-960a7a170/" className="linkedin">
                                        <img src="https://image.flaticon.com/icons/png/512/61/61109.png" className="imagem-footer"></img>
                                        </a>
                                    {/* </li><li> */}
                                        <a href="https://www.instagram.com/paul_4pires" className="instagram">
                                        <img src="http://www.logospng.com/images/116/12-black-instagram-logo-small-icon-images-116001.png" className="imagem-footer"></img>
                                        </a>
                                    {/* </li>
                                </ul>
                            </nav> */}
                            
                        </div>
                        </center>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2018-2019 Paulo Pires de Avila
                        </div>
                    </div>
                    </footer>


        )
    }
}


export default Footer;