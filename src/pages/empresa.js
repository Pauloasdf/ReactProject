import React from 'react';

export default class Empresa extends React.Component{
    
    render() {

        if(sessionStorage.getItem('usuario') === {} || sessionStorage.getItem('usuario') === null){
            document.location.href = 'http://localhost:3000/newUser'
        }

        return(      
                    <div className="row ">
                        <div className="col s2 menu_ancora">
                            <h1>Menu</h1>
                        </div>
                        <div className="col s10 pagina_central"> 
                            <div className="col s1"></div>
                            <div className="col s10">
                                <center><h1>A Syonet</h1></center>
                                <hr></hr><br></br>
                                <p> Donec commodo lacinia massa, in mattis ex cursus sit amet. Phasellus laoreet a risus quis gravida. Etiam at ipsum auctor, sodales ligula sit amet, malesuada ante. Duis rhoncus ipsum at felis mattis, vehicula dignissim est tincidunt. Mauris auctor, leo vitae tincidunt suscipit, dui dolor rutrum erat, ut varius orci nulla sed orci. Maecenas ut iaculis sem, quis aliquet nisi. Nulla commodo quam et metus dapibus pharetra vel nec nisi. Sed eleifend sit amet nisi bibendum interdum. Donec nec risus feugiat, dapibus neque eget, dictum ante. Proin sapien orci, facilisis in leo a, eleifend fringilla mi. Duis id odio leo. Quisque vehicula quam sit amet maximus faucibus. Aliquam lobortis accumsan justo, ut varius lorem egestas ut. </p>
                                <p>Duis tempor sagittis vehicula. Curabitur vestibulum elementum viverra. Sed non eleifend dolor. Nunc eget tortor nunc. Nam dictum euismod nisl, vitae aliquam ex fringilla rutrum. Ut nibh ligula, lacinia vitae blandit rutrum, mollis dignissim est. Phasellus finibus a erat vitae lacinia. Donec viverra eros et odio sagittis eleifend eu quis lorem. Quisque in ante vitae ex rutrum ultricies. Sed blandit, ex ornare aliquam sagittis, risus sapien pellentesque massa, eget lacinia arcu mi semper odio. Mauris ac laoreet sem. Pellentesque rhoncus porta nisl a pharetra. Donec pharetra odio in nisi tempor, vel maximus diam fermentum. Nunc id bibendum lectus, ac commodo velit. Vestibulum posuere arcu ac finibus sollicitudin. Cras vel dictum nunc.</p>
                                <p>Curabitur venenatis interdum magna, eget rutrum dolor congue at. Morbi vitae dolor nec tellus laoreet commodo quis a odio. Morbi in arcu volutpat, rhoncus risus nec, posuere dolor. Maecenas commodo ullamcorper urna sed aliquam. Proin quis odio non nunc vehicula malesuada. Aliquam non facilisis elit, ut pretium ante. Cras ex massa, eleifend vitae felis ut, venenatis placerat ante. Praesent nisi velit, imperdiet non ultrices tempus, venenatis non lacus. Donec in purus sit amet lorem fermentum fermentum eu eu neque. Ut mi felis, dapibus id tempus in, viverra suscipit erat. Donec laoreet eu felis sed vestibulum. Etiam placerat vehicula augue ac tempor. Fusce ut egestas tortor, a rhoncus sapien. Morbi velit lacus, pulvinar at sem ac, ultricies porttitor ligula. Donec tincidunt mi non tortor vehicula, at dapibus ligula euismod.</p>
                                <p>Praesent efficitur enim metus, nec pulvinar nunc lacinia sed. Nulla luctus odio eu risus dapibus faucibus. Curabitur at libero at mauris porta ornare non in lorem. Maecenas consequat erat non lectus consequat, quis egestas augue luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque tempor, nisi vitae tempor semper, libero orci vulputate felis, nec tempus lacus ligula ut augue. Curabitur feugiat pretium sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum nisi nec justo dictum, ac sollicitudin ligula imperdiet. Suspendisse sollicitudin at mauris sed pharetra. Cras vitae purus non elit pulvinar ornare.</p>
                                <p> Aliquam bibendum varius dolor, in ultricies neque ultrices sit amet. Proin porttitor efficitur mauris, dictum tincidunt nisl efficitur quis. In nec laoreet libero, nec faucibus nibh. Nunc volutpat felis ac fermentum venenatis. Praesent lobortis rhoncus diam. Pellentesque interdum, erat semper lacinia euismod, mi velit rhoncus purus, vitae accumsan mi nisl nec ligula. Phasellus mattis efficitur aliquam. Sed efficitur sagittis leo eget vehicula. Nulla ac justo nec tellus mollis auctor. Integer non est ut sapien hendrerit hendrerit sed sit amet augue. Nullam dapibus ornare velit non sagittis. Suspendisse ipsum mauris, maximus eget porta hendrerit, facilisis vel lorem. Phasellus rutrum posuere odio quis facilisis. </p>
                                
                            </div>
                        </div> 
                    </div>              )
             }
}
