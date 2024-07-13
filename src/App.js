import React from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className={styles.app}>
      <SearchBar />
    </div>
  );
}

export default App;
