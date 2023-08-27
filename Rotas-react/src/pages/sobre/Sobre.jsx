import {Link} from 'react-router-dom'


function Sobre() {
  

    return (
      <div>
        <h1>Bem vindo a pagina Sobre</h1> <br /> <br />

        <Link to='/' >
          Pagina home
        </Link>

        <Link to='/Contato' > <br />
           Contato
        </Link>
  
  
      </div>
    )
  }
  
  export default Sobre;