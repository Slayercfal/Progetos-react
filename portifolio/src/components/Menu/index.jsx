import './header.css'
import { Link } from 'react-router-dom';
import {BsMicrosoft} from 'react-icons/bs'
import {AiTwotonePhone , AiOutlineFolderOpen} from 'react-icons/ai'
import { useState, useEffect } from 'react';

function HeaderApp(){
    const [time , setTime] = useState()

    //Relogio 
    useEffect(() =>{
        const interval = setInterval(() =>{
            const currentTime = getCurrentTime()
            setTime(currentTime)
        }, 1000)

        return () => clearInterval(interval)

        
    },[])

    function getCurrentTime(){
        const today = new Date()
        const horas = today.getHours()
        const minutos = today.getMinutes()

        return{
            horas: formatTime(horas),
            minutos: formatTime(minutos)
        }
    }
    function formatTime(time){

        const timeInString = String(time);
        const isValid = timeInString.length === 2;

        if(isValid) return time;

        const newTime = timeInString.padStart(2 , 0);

        return newTime;
    }


    return(
        <div className='container-menu'>

            <Link to={'/'} className='windows'>
                <BsMicrosoft size={30} color='gray'/>
            </Link>

            <Link to={'/Contatos'}>
                <AiTwotonePhone size={35} color='gray'/>
            </Link>

            <Link to={'/Projetos'}>
                <AiOutlineFolderOpen size={35} color='gray'/>
            </Link>

            <div className='horas'>
                <span>
                    {time?.horas}
                </span>
                <span>:</span>
                <span>
                    {time?.minutos}
                </span>
            </div>
         
        </div>
    )
}

export default HeaderApp;