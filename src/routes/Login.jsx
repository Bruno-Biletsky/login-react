import { useRef, useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { LoginStyle } from "../css/LoginStyle";
import logo from "../assets/logo.jpg"
const Login=()=>{
    //Hook - useRef pega a referencia do componente ou elemento e guarda
    const usuario = useRef();
    const senha = useRef();
    
    //Hook - useSate - Manipula  estado da variavel
    const [usuarios, setUsuarios]= useState([]);

    //Hook - useNavigate - ele redireciona para um componente
    const navigate = useNavigate();

    // criando a função de validação
    function validade(){
        for(let i=0; i<usuarios.length; i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }


    //criando a função handleSubmit
    const handleSubmit=(event)=>{
        //previne que sua pagina faça qualquer modificação ex.load
        event.preventDefault();

        if (validade()){
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario)
                sessionStorage.setItem("senha",token)
                navigate("/dashboard")

        }else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook - useEffect - permite acessar o json e executar login

    useEffect(()=>{
        //acessa a api e vai trazer os dados via url
        fetch("http://localhost:5000/usuarios/")
        //promise
        .then((resposta)=>{
            return resposta.json();
        })
        //receber as alterações (useState)
        .then((resposta)=>{
            setUsuarios(resposta)
        })
        //retorna um array vazio
    },[])

    return(
        <>
        <LoginStyle>
            <section className="container">
                <div className="container-login">
                    <div className="login">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <span className="titulo-login">Faça seu login</span>

                            <div className="w-input">
                                <input
                                    type="text"
                                    className="input-form"
                                    id="usuario"
                                    ref={usuario} //permite renderizar as infos 1 vez apenas.
                                />

                            </div>
                            <div className="w-input">
                                <input
                                    type="password"
                                    className="input-form"
                                    id="senha"
                                    ref={senha} //permite renderizar as infos 1 vez apenas.
                                />

                            </div>
                            <div className="login-btn">
                                <button type="submit" className="login-form-btn">Login</button>   
                            </div>
                            
                            <ul className="utilidades">
                                <li>
                                    <a href="#" className="text1">Esqueceu sua senha?</a>
                                    
                                </li>
                                <li>
                                    <span className="text1">Não possui conta? </span>
                                    <Link to="/usuario">Criar</Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <img src={logo} alt="LOGO DO SITE"></img>
                </div>
            </section>
        </LoginStyle>
        </>
    )
}

export default Login