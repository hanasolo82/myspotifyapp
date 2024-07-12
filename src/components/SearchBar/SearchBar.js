import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.Bar}>
      <label for="music-search"></label>
      <input type="search" id="music-search" name="founder" placeholder="Search"></input>
    </div>
  );
};

export default SearchBar;
