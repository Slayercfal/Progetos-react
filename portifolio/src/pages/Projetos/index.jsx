import './projetos.css'

import {AiTwotoneFolder} from 'react-icons/ai'

function Projetos(){
    return(
        <div className='container-projetos'>
            <div className='content'>
                <div className='projetos-icone'>
                    <AiTwotoneFolder size={100}/>
                    <p>Calculadora</p>
                </div>
                <div className='projetos-icone'>
                    <AiTwotoneFolder size={100}/>
                    <p>Calculadora</p>
                </div>
                <div className='projetos-icone'>
                    <AiTwotoneFolder size={100}/>
                    <p>Calculadora</p>
                </div>
                <div className='projetos-icone'>
                    <AiTwotoneFolder size={100}/>
                    <p>Calculadora</p>
                </div>
            </div>
        </div>
    )
}

export default Projetos;