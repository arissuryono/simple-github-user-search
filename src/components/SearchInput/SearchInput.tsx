import React from "react";
// import PropTypes from "prop-types";

import styles from "./styles.module.scss";

type SearchInputProps = {
  onSearch: () => void;
  query: string;
  setQuery: (query: string) => void;
};

function SearchInput({ onSearch, query, setQuery }: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <div className={styles.search__container}>
      <input
        className={styles.search__input}
        value={query}
        onChange={handleChange}
      />
      <button className={styles.search__submit} onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

SearchInput.propTypes = {};

export default SearchInput;
