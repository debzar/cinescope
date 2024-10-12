import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '323a6d558ca10605a33c4624d8b6ea35',
  },
});

export default api;