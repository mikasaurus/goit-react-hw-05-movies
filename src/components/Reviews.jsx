import { getMovieReviews } from 'API/moviesAPI';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const Reviews = () => {
  const { id } = useLocation.state;
  const [reviews, setReviews] = useState;

  useEffect(() => {
    getMovieReviews(id).then(data => setReviews(data.results));
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ author, content }) => (
          <li key={nanoid()}>
            <h3>{`Author: ${author}`}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>Be first person to comment!</p>
      )}
    </ul>
  );
};
