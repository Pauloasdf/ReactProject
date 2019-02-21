import React from 'react';


export default class loginUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                usuarios:{},
        };
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleInputChangeSignUp = this.handleInputChangeSignUp.bind(this);
        this.handleInputChangeLogin = this.handleInputChangeLogin.bind(this);
        this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
      }

      //BUSCA PELO OBJETO DE USUÁRIOS CADASTRADOS
      componentDidMount(){
        fetch('http://localhost:2000/usuarios')
        .then(cartao => cartao.json())
        .then(data => {
            this.setState({ usuarios:data })
            });
      }

      // LOGIN NO SISTEMA
      handleSubmitLogin(){

        const login = this.state

        fetch('http://localhost:2000/confirmaUser', {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(login), }),


         // k = 0;
        //if (emailLogin !== '' && passLogin !== ''){         
            fetch('http://localhost:2000/confirmaUser')
                .then(cartao => cartao.json())
                .then(confirmaUser => {
                this.setState({ quantidade:confirmaUser })
                console.log(this.state.quantidade)
            });
       //}

      }


      //CADASTRO E VALIDAÇÕES DE USUÁRIO ÚNICO
      handleSubmitSignUp(){
        const emailUsuarioNovo = this.state.email      

        if (emailUsuarioNovo !== '' && this.state.pass !== '' && this.state.nome !== ''){         

       var usuarioUnico = 0;   
       const usuariosmap = this.state.usuarios
       let i = 0
                    for (i=0;i<this.state.usuarios.length;i++){
                        if(emailUsuarioNovo !== usuariosmap[i].email){
                            usuarioUnico = usuarioUnico + 1
                        }
                    }

                    if(usuarioUnico === usuariosmap.length){
                        const user = this.state
                            console.log('Cliente Único')
                                fetch('http://localhost:2000/newuser', {
                                method: "POST", 
                                mode: "cors", 
                                cache: "no-cache", 
                                credentials: "same-origin", 
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                redirect: "follow",
                                referrer: "no-referrer",
                                body: JSON.stringify(user), 
                })
                        }else{
                            alert('Endereço de E-mail já utilizado por outra conta')
                        }           
        }else{
            alert('Por favor, há campos sem preenchimento!!')
        };
    }


    handleInputChangeLogin(event){
        const target = event.target;
        const value = target.value;
        const loginUsuario = target.name;
        this.setState({
        [loginUsuario]: value,
        });   
}


    handleInputChangeSignUp(event){
            const target = event.target;
            const value = target.value;
            const NovoUsuario = target.name;
            this.setState({
            [NovoUsuario]: value,
            });
}

       
      
    render(){
        return(
            <div className="row ">
                        <div className="col s12 login"> 
                            <div className="col s1"></div>
                            <div className="col s10">
                            <center><h1>Bem-Vindo!</h1></center>
                            <hr></hr><br></br>
                                <div className="col s6 m6 l6">
                                <p> Já possuo um cadastro   ; )</p>
                                
                                    <form onSubmit={this.handleSubmitLogin}>
                                        <label> E-mail:
                                        <input
                                        type= "text"
                                        name="emailLogin"
                                        placeholder="Insira aqui seu e-mail"
                                        onChange={this.handleInputChangeLogin}
                                        required
                                        />
                                        </label>
                                        <label> Senha:
                                        <input
                                        type= "password"
                                        name="passLogin"
                                        placeholder="Insira aqui sua senha"
                                        onChange={this.handleInputChangeLogin}
                                        required
                                        />
                                        </label>
                                        <center> <a className="waves-effect waves-light btn-large green botao-update" onClick={this.handleSubmitLogin}>Entrar</a></center>
                                    </form>

                                </div>
                                <div className="col s6 m6 l6">
                                <p> Quero me cadastrar!</p>

                                    <form onSubmit={this.handleSubmitSignUp}>
                                        <label> Nome:
                                        <input
                                        type= "text"
                                        name="nome"
                                        placeholder="Insira aqui seu nome"
                                        onChange={this.handleInputChangeSignUp}
                                        required
                                        />
                                        </label>
                                        <label> E-mail:
                                        <input
                                        type= "text"
                                        name="email"
                                        placeholder="Insira aqui seu e-mail"
                                        onChange={this.handleInputChangeSignUp}
                                        required
                                        />
                                        </label>
                                        <label> Senha:
                                        <input
                                        type= "password"
                                        name="pass"
                                        placeholder="Insira aqui sua senha"
                                        onChange={this.handleInputChangeSignUp}
                                        required
                                        />
                                        </label>
                                        <center> <a className="waves-effect waves-light btn-large blue botao-update" onClick={this.handleSubmitSignUp}>Cadastro</a></center>
                                    </form>

                                </div>

                               
                                
                            </div>
                        </div> 
                    </div>             
        )
    }
        

}
