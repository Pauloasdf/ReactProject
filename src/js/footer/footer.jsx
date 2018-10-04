import React from 'react';

class Footer extends React.Component{
    render(){
    let corFooter = "page-footer nav-wrapper "+ this.props.cor; 
    
        return(
            <footer className={corFooter}>
          <div className="container">
            <div className="row">
              <div className="col l4 s12">
                <h5 className="white-text">   </h5>
                <p className="grey-text text-lighten-4"> Esta página foi prodizida como um projeto de TCC.</p>
              </div>
              <div className="col l6 offset-l2 s12">
                <h5 className="white-text"></h5>
               
                <nav>
                    <ul class="icones-sociais">
                        <li>
                            <a href="http://pt-br.facebook.com/webcodefree" class="facebook">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/" class="github">
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" class="twitter">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://br.linkedin.com/in/pauloricardomarinho" class="linkedin">
                                LinkedIn
                            </a>
                        </li><li>
                            <a href="https://br.linkedin.com/in/pauloricardomarinho" class="linkedin">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </nav>
                
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Paulo Pires de Avila
            </div>
          </div>
        </footer>




        )
    }
}


export default Footer;