import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header__container}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>Search GitHub User</div>
      <div>?</div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
