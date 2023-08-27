import { Link } from 'react-router-dom'

function Contato(){
    return(
        <div>
            <h1>Pagina Contato</h1>
            <span>Contato: 879 821-4213</span> <br /> <br />

            <Link to='/' >
                Pagina home
            </Link>

            <Link to='/sobre'> <br /> <br />
                Sobre
            </Link>
        </div>
    )

}

export default Contato;