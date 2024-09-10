import { useRef, useState, useEffect } from "react"
import { useNavigate}

const Login=()=>{
    //Hook - useRef pega a referencia do componente ou elemento e guarda
    const usuario = useRef();
    const senha = useRef();
    
    //Hook - useSate - Manpula  estado da variavel
    const [usuarios, setUsuarios]= useState([]);

    //Hook - useNavigate - ele redireciona para um componente
    const navigate = useNavigate();

    // criando a função de validação


    //criando a função handleSubmit


    //Hook - useEffect - realiza  efeito colateral na pagina vai executar  login
    return(
        <>
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
                                type="text"
                                className="input-form"
                                id="usuario"
                                ref={usuario} //permite renderizar as infos 1 vez apenas.
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
                                <span className="text1">Não possui conta?</span>
                                <a href="#"> Criar</a>
                            </li>
                        </ul>
                    </form>
                </div>
                <img src="" alt="LOGO DO SITE"></img>
            </div>
        </section>
        </>
    )
}

export default Login