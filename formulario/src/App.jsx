import { useState } from 'react'
import './index.css'


function App() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha , setSenha] = useState('')
  
  const handleInputChange = (event) =>{
    setNome(event.target.value)

  }

  const emailEnviado = (event) =>{
    setEmail(event.target.value)
  }

  const senhaCriada = (event) =>{
    setSenha(event.target.value)
  }

  const clicounoBotao = (e) =>{
    e.preventDefault()
    validaçao()

  }


  function validaçao(){

    if(nome === '' || email === '' || senha ===''){
      alert('Preencha os campos abaixo')
      return
    }
  }

  return (
    <>
      <div className="container">
        <div className='forms'>
          <h1>Cadastre-se</h1>
          <form onSubmit={clicounoBotao}>
            <input
            type="text"
            name="nome"
            id="Inome"
            placeholder='Digite seu Nome'
            value={nome}
            onChange={handleInputChange}
            />

            <input
            type="email"
            name="email"
            id="Iemail"
            placeholder='Digite seu email'
            value={email}
            onChange={emailEnviado}
            />

            <input type="password"
            name="senha"
            id="isenha"
            placeholder='Digite uma senha'
            value={senha}
            onChange={senhaCriada}
            />
            
            <input
            type="submit"
            value="Cadastre-se"
            className='button-submit'
            />

          </form>
        </div>


      </div>
    </>
  )
}

export default App
