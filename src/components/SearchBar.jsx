import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      className={styles.searchContainer}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => {
          e.preventDefault();
          setCity(e.target.value);
        }}
        value={city}
      />
      <input type="submit" className={styles.searchButton} value="Agregar" />
    </form>
  );
}

export default SearchBar;
