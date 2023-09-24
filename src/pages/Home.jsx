import { getTrending } from 'API/moviesAPI';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Trending today:</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={nanoid()}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
