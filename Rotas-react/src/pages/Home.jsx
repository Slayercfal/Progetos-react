import {Link} from 'react-router-dom'

function Home() {
  

    return (
      <div>
        <header className='top'>
          <div>
            <h1>Programador</h1>
          </div>

        <div className='contatos'>
          <Link to='/sobre'> 
            Sobre
          </Link>
          <Link to='/Contato' > 
             Contato
          </Link>
        </div>

        </header>
        <h1>Bem vindo a pagina Home </h1>
        <span>Sujeito programador</span> <br />

        
      </div>
    )
  }
  
  export default Home;