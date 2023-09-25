import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import css from './App.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <nav className={css.Navbar}>
        <Link to="/" className={css.NavLink}>
          Home
        </Link>
        <Link to="/movies" className={css.NavLink}>
          Movies
        </Link>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
