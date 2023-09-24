import { searchMovies } from 'API/moviesAPI';
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Searchbar } from '../components/Searchbar';
import { nanoid } from 'nanoid';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const searchHandler = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query.length > 0)
      searchMovies(query).then(data => setMovies(data.results));
  }, [query]);

  return (
    <div>
      <Searchbar onSearch={searchHandler} />
      <ul>
        {movies.map(movie => {
          return (
            <li key={nanoid()}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
