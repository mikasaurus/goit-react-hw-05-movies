import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  return (
    <main>
      <h1>Page not found. Try your luck somewhere else.</h1>
      <p onClick={goHome}>Go back</p>
    </main>
  );
};

export default NotFound;
