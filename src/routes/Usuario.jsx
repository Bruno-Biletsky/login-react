import { UsuarioStyle } from "../css/UsuarioStyle";
import { MdCancel } from "react-icons/md";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Usuario=()=>{
    //hook-useParams é utilizado para receber parametros(codigo) pela rota
    let {id} =useParams();

    //hook-useState é utilizado para manipular o estado da variavel (usuarios)
    const [usuarios, setUsuarios]=useState({
        id,
        usuario:'',
        senha:''
    });
    //hook - useNavigate redirecionando para outro componente
    const navigate = useNavigate();

    //criando a função handleChange
    // os três pontos (spread) significa PEGAR TUDO e ADICIONAR algo
    // evento target captura o que foi digitado em um campo
    // value{usuarios.senha ou usuarios.usuario} vai la no banco(json) e tras o usuario/senha

    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]:e.target.value}) 
    }
    //criando uma variavel method para post e put (editar)
    let metodo = 'post'
    if(id){
        metodo = 'put'
    }
    //criando a função handleSubmit
    const handleSubmit=(e)=>{
        //previne qualquer alteração na pagina (ex. load)
        e.preventDefault();
    fetch(`http://localhost:5000/usuarios/${id ? id: ''}`,{
        method: metodo,
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
        
    }).then (()=>{
        //direciona para o componente
        navigate("/usuario");
    })
    };

    return(
        <>
        <UsuarioStyle>
            <section className="usuario">
                <h1>Cadastro de Usuários</h1>
                <form onSubmit={handleSubmit}> 
                    <input
                    type="text"
                    name="usuario"
                    value={usuarios.usuario}
                    placeholder="Digite seu usuário"
                    /*O onChange é util para reagir em tempo real a cada alteração do input*/
                    onChange={handleChange}
                    />
                    <input
                    type="password"
                    name="senha"
                    value={usuarios.senha} //bancoDeDados.valor
                     placeholder="Digite sua senha" //inserir o valor no JSON
                    /*O onChange é util para reagir em tempo real a cada alteração do input*/
                    onChange={handleChange}
                    />
                    <button type="submit" onSubmit={handleSubmit}>Cadastrar</button>
                    <Link to="/usuario">
                        {/*chamando o icon*/}
                        <MdCancel/>
                    </Link>
                </form>
            </section>    
        </UsuarioStyle>
        
        </>
    )
}

export default Usuario