import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { DashboardStyle } from "../css/DashboardStyle";




const Dashboard=()=>{

    //hook-useNavigate redireciona o componente
const navigate = useNavigate();

//criando a função handleLogout
const handleLogout=()=>{
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("usuario e senha removidos -> Bye Bye")
    navigate("/");
}
    return(
        
        <>
        <DashboardStyle>
            <h3>!--Dashboard--!</h3>
            <button onClick={handleLogout}>
                <IoMdLogOut />
            </button>   
        </DashboardStyle>
        
        </>
    )
}

export default Dashboard