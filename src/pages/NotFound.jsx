import { useNavigate } from 'react-router-dom';
import css from './Pages.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  return (
    <main>
      <h1>Page not found. Try your luck somewhere else.</h1>
      <button onClick={goHome} className={css.GoBack}>
        Go back
      </button>
    </main>
  );
};

export default NotFound;
