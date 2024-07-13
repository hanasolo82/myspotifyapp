import React from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AppSearchResults from "./components/SearchResults/container/AppSearchResults";

function App() {
  return (
    <div className={styles.app}>
      <SearchBar />
      <AppSearchResults />
    </div>
  );
}

export default App;
