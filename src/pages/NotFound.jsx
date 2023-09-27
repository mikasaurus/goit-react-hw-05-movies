import { Link, useLocation } from 'react-router-dom';
import css from './Pages.module.css';

const NotFound = () => {
  const location = useLocation().state?.location ?? '/';

  return (
    <main>
      <h1>Page not found. Try your luck somewhere else.</h1>
      <Link to={location} className={css.GoBack}>
        Go back
      </Link>
    </main>
  );
};

export default NotFound;
