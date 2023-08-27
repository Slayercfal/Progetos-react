import axios  from "axios";
//https://api.themoviedb.org/3/movie/now_playing?api_key=c3de5490eec5ab3605fd77a91bce656b&language=pt-BR

// BASE: https://api.themoviedb.org/3/


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;