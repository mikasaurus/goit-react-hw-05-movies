import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '5222be32c650dfe077baa6c35531a8c3',
};

export const getTrending = async () => {
  const response = await axios.get('/movie/popular');
  const data = await response.data;
  return data;
};

export const searchMovies = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  const data = await response.data;
  return data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`/movie/${id}`);
  const data = await response.data;
  return data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  const data = await response.data;
  return data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  const data = await response.data;
  return data;
};
