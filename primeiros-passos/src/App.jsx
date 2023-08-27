import { useState } from 'react'
import './styles/global.css'
import Navegaçao from './components/Navegaçao' 
import Home from './components/Home'
import Projetos from './components/Projetos'
import Contanto from './components/Contato'
import AboutInfo from './components/About'


function App(){
  
  return (
    <div className='container'>
      <Navegaçao />
      <Home/>
      <Projetos/>
      <AboutInfo/>
      <Contanto/>

    </div>
  )
}

export default App
