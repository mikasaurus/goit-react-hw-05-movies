import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'API/moviesAPI';
import css from './Pages.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    movieId: 0,
    title: '',
    release: '',
    rate: 0,
    overview: '',
    genres: [],
    img: '',
  });
  const { movieId, title, release, rate, overview, genres, img } = movieDetails;
  const location = useLocation().state?.location ?? '/';

  useEffect(() => {
    getMovieDetails(id).then(data => {
      setMovieDetails({
        movieId: id,
        title: data.original_title,
        release: data.release_date,
        rate: data.vote_average.toFixed(1) * 10,
        overview: data.overview,
        genres: data.genres.map(genre => genre.name),
        img: `https://image.tmdb.org/t/p/w200${data.poster_path}`,
      });
    });
  }, [id]);

  return (
    <div>
      <Link to={location} className={css.GoBack}>
        Go back
      </Link>
      <div className={css.Wrapper}>
        <img src={img} alt={`${title} poster`} />
        <div>
          <h2>{`${title} (${release})`}</h2>
          <p>{`User Score: ${rate}%`}</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <p>{genres.join(', ')}</p>
        </div>
      </div>
      <h4>Additional information:</h4>
      <div className={css.OtherWrapper}>
        <Link to="cast" state={{ id: movieId }} className={css.Link}>
          Cast
        </Link>
        <Link to="reviews" state={{ id: movieId }} className={css.Link}>
          Review
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
