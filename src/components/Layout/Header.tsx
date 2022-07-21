import React from "react";
// import PropTypes from "prop-types";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header__container}>
      <div>Left</div>
      <div>Right</div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
