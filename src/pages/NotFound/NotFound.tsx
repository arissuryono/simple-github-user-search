import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound__container">
      <img src={`${process.env.PUBLIC_URL}/images/404.png`} alt="not found" />
      The Page you're looking is not exist,
      <Link to="/">click here to go back to main page</Link>.
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
