import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";
import AppSearchButton from "../SearchButton/container/AppSearchButton";

function SearchBar() {
  const [inputQuery, setInputQuery] = useState("");
  const handleSearch = (e) => {
    setInputQuery(e.target.value);
  };
  return (
    <div className={styles.Bar}>
      <label for="music-search"></label>
      <input
        className={styles.searchInput}
        type="search"
        value={inputQuery}
        onChange={handleSearch}
        id="music-search"
        name="founder"
        placeholder="Search"
      />
      <AppSearchButton />
    </div>
  );
}

export default SearchBar;
