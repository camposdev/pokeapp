import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const api = axios.create({
  baseURL,
});

export const getPokemonByName = async (name) => api.get(`pokemon/${name}`);

export default api;
