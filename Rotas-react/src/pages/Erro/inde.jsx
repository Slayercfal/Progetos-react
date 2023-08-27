import {Link} from 'react-router-dom'


function Erro(){

    return(
        <div>
            <h2>Ops parace que essa pagina nao existe</h2>
            <span>Encontramos essas paginas aqui:</span> <br /> <br />
            <Link to = '/'>HOME</Link> <br />
            <Link to = '/sobre'>sobre</Link> <br />
            <Link to = '/contato'>contato</Link>
        </div>


    )
}

export default Erro;