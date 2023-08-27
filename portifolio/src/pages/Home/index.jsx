import './home.css'
import { Link } from 'react-router-dom';

import {BsMicrosoft} from 'react-icons/bs'
import {AiTwotonePhone , AiOutlineFolderOpen} from 'react-icons/ai'

function Home(){
    return(
        <div className='container-home'>
          
            <div className='infos'>
                <div className='contatos-info'>
                    <Link to={'/Contatos'}>
                        <AiTwotonePhone size={35} color='#000'/>
                        <p>Contatos</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to={'/Projetos'}>
                        <AiOutlineFolderOpen size={35} color='#000'/>
                        <p>Projetos</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;