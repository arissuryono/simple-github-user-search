import React from "react";
// import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className={styles.content__container}>
      <Outlet />
    </div>
  );
}

Main.propTypes = {};

export default Main;
