import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieCredits } from 'API/moviesAPI';
import css from './App.module.css';

const Cast = () => {
  const { id } = useLocation().state;
  const [cast, setCast] = useState([]);

  const url = 'https://www.themoviedb.org/t/p/w138_and_h175_face';
  const defaultImg =
    'https://tr.rbxcdn.com/5e259fe9aafa5f2d51688f3e5b914847/420/420/Hat/Png';

  useEffect(() => {
    getMovieCredits(id).then(data => setCast(data.cast));
  }, [id]);

  return (
    <ul className={css.List}>
      {cast.map(({ profile_path, name, character }) => (
        <li key={id}>
          <img
            className={css.Pic}
            src={profile_path ? `${url}${profile_path}` : defaultImg}
            alt={`${name}`}
          />
          <p>
            {name} as {character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
