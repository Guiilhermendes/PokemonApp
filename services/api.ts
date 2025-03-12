import axios from 'axios';
import { API_BASE_URL } from '@env';

const baseURL = API_BASE_URL || 'http://localhost:3000';

export const fetchPokemonAbilities = async (pokemon: string): Promise<string[]> => {
  try {
    const response = await axios.get(`${baseURL}/api/pokemons/${pokemon}`);
    return response.data;
  } catch (error) {
    return [];
  }
};