import { getTrending } from 'API/moviesAPI';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './Pages.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2 className={css.Header}>Trending today:</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={nanoid()}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={css.Link}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
