import { useState } from 'react'
import { SlActionRedo } from "react-icons/sl";
import './global.css'
import './styles/home.css'
import api from './services/api'

function App() {
  const [input, setInput] = useState('');
  const [cep , setCep] = useState('');

  async function handleSearch(){

    if(input === ''){
      alert('Preencha algum CEP')
      return;
    }
    try{
      const resul = await api.get(`${input}/json`);
      setCep(resul.data)
      setInput('')
      
    }
    catch{
      alert('Ops erro ao buscar!!!')
      setInput('')
      
    }

  }
  
  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>

      <div className='container-input'>
        <input
         type="text" 
         name="" 
         id="" 
         placeholder='Digite seu CEP...'
         value={input}
         onChange={ (e) => setInput(e.target.value) }
        />

        <button className='ButtonSearch' onClick={handleSearch}>
            <SlActionRedo size={25} color='#fff'/>
        </button>

      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>

        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span></span>
        <span>Bairro: {cep.bairro} </span>
        <span>{cep.localidade}- {cep.uf}</span>

      </main>


      )}
      

    </div>
  )
}

export default App
