import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "../styles/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.ico} to="/">
        🌤
      </NavLink>
      <span> Weathering the world</span>

      <NavLink
        to="/about"
        className={styles.links}
        activeClassName={styles.activeLink}
      >
        ABOUT
      </NavLink>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
