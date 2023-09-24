import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from 'API/moviesAPI';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
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

  const goBack = location.state?.from ?? { pathname: '/movies' };

  useEffect(() => {
    getMovieDetails(id).then(data => {
      setMovieDetails({
        movieId: id,
        title: data.original_title,
        release: data.release_date,
        rate: data.vote_average * 10,
        overview: data.overview,
        genres: data.genres.map(genre => genre.name),
        img: `https://image.tmdb.org/t/p/w200${data.poster_path}`,
      });
    });
  }, [id]);

  return (
    <div>
      <Link to={goBack}>Go back</Link>

      <div>
        <img src={img} alt={`${title} poster`} />
        <div>
          <h2>{`${title} (${release})`}</h2>
          <p>{`User Score ${rate}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast" state={{ id: movieId }}>
          Cast
        </Link>
        <Link to="reviews" state={{ id: movieId }}>
          Review
        </Link>
      </div>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
