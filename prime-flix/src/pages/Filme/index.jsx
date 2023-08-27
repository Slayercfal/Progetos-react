import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import api from '../../services/api'
import './filmeinfo.css'
import { toast } from "react-toastify";


function Filme(){
    const {id} = useParams()
    const [filme , setFilme] = useState(true)
    const [loading , setLoading ] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'c3de5490eec5ab3605fd77a91bce656b',
                    language: 'pt-BR'
                }
             })
             .then((response) =>{
                setFilme(response.data)
                setLoading(false)
             })
             .catch(() =>{
                navigate('/', {replace: true})
                return;
             }
             )
        }
        loadFilme();

        return () =>{

        }
    },[navigate , id])

        //salvando no no localstorage

    function salvarFilme(){
        const minhaLista = localStorage.getItem('primeflix');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if(hasFilmes){
            toast.warn('Esse filme ja esta na sua lista')
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('primeflix', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso')
    }

    if(loading){
        return(
            <div>
                <h1>Carregando Detalhes</h1>
            </div>
        )
    }


    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliaçao: {filme.vote_average} /10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>
                    Salvar
                </button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} trailer`}  target="_blank" rel="external">Trailer</a>
                </button>

            </div>
            
        </div>
    )
}

export default Filme;