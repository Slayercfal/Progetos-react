import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Contatos from './pages/Contatos'
import HeaderApp from './components/Menu'
import Projetos from './pages/Projetos'


function RotasApp(){
    return(
        <BrowserRouter>

            <HeaderApp/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contatos" element={<Contatos/>}/>
                <Route path="/Projetos" element={<Projetos/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RotasApp;