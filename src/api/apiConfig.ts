import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer NA.Lhno8vZZgddA7d48_kNAv6VbBbzz9PDZxCLAfo4QyFkJ1LIUBd9iFM5fCte4',
  },
});
