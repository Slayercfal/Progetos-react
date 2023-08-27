import axios from 'axios';

// https://viacep.com.br/ws/ 5632354 0/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/" // url base = nao muda
});

export default api;