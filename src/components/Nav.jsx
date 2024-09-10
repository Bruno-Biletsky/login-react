import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </nav>
        </>
    )
}

export default Nav