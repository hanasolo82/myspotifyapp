import React from "react";
import styles from "../SearchButton/SearchButton.module.css";

function SearchButton({ onClick }) {
  return (
    <button className={styles.searchBtn} onClick={onClick}>
      Button Search
    </button>
  );
}

export default SearchButton;
