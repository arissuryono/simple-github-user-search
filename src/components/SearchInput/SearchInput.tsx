import React from "react";
// import PropTypes from "prop-types";

import styles from "./styles.module.scss";

function SearchInput() {
  return (
    <div className={styles.search__container}>
      <input className={styles.search__input} />
      <button className={styles.search__submit}>Search</button>
      sad
    </div>
  );
}

SearchInput.propTypes = {};

export default SearchInput;
