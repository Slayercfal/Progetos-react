import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Erro from './pages/Erro'
import Filme from './pages/Filme'
import Header from './components/header'
import Favoritos from './pages/Favoritos'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/Filme/:id"  element={<Filme/>}/>
                <Route path="/Favoritos" element={<Favoritos/>}/>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RoutesApp;
