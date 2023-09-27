import { useState } from 'react';
import css from './App.module.css';

export const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const submitHandler = eve => {
    eve.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          autoFocus
          placeholder="Search movie"
          onChange={eve => setQuery(eve.target.value)}
          value={query}
          className={css.Input}
        />
        <button type="submit" className={css.InputButton}>
          Search
        </button>
      </form>
    </div>
  );
};
