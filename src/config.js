export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.API_KEY;

export const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
export const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
