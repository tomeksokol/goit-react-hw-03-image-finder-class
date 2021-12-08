import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
