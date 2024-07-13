import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';
import AppSearchButton from '../SearchButton/container/AppSearchButton';

function SearchBar() {
  return (
    <div className={styles.Bar}>
      <label for="music-search"></label>
      <input 
      className={styles.searchInput}
      type="search"
      id="music-search" name="founder" placeholder="Search"
      />
      <AppSearchButton />
    </div>
  );
};

export default SearchBar;
