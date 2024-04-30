import React from 'react';
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const Search = ({ className, placeholder }) => {
  return (
    <div className={className}>
      <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
        <input className={styles.search} type="text" placeholder={placeholder} />
        <button className={styles.searchButton} type='submit'>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;
