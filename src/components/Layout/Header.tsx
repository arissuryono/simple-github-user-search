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
      <div>
        <a href="https://github.com/arissuryono/simple-github-user-search">
          <img
            src={`${process.env.PUBLIC_URL}/images/github.png`}
            alt="source to this repo"
            style={{ width: "32px" }}
          />
        </a>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
