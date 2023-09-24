import { useState } from 'react';

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
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
