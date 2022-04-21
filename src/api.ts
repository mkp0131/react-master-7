const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieNowPlaying = () => {
  return fetch(
    `${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
};

export const getMovieDetail = (id: string) => {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
};

export const getMoviePopular = () => {
  return fetch(
    `${BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
};

export const getMovieUpcoming = () => {
  return fetch(
    `${BASE_URL}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
};

export const getMovieTopRate = () => {
  return fetch(
    `${BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
};

export const getMovieSearch = (keyword: string) => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&query=${keyword}&page=1&include_adult=false`
  ).then((res) => res.json());
};

export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

export interface MoviesData {
  results: MovieProps[];
}
