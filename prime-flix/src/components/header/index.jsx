import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Prime flix</Link>
            <Link to='/favoritos' className='favoritos'>Prime flix</Link>
        </header>
    )
}

export default Header;