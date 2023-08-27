import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/Contatos'
import Produto from './pages/Produto'

import Erro from './pages/Erro/inde'


function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/contato' element={<Contato/>}/> 
                <Route path='/Produto/:id' element = {<Produto/>}/>


                <Route  path='*' element = {<Erro/>}/>
            </Routes>
        
        </BrowserRouter>
    )
    

    
}



export default RouterApp;