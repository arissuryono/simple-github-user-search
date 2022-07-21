import React from "react";
// import PropTypes from 'prop-types'

import styles from "./styles.module.scss";
function Avatar({ url, alt = "" }: { url: string; alt: string }) {
  return (
    <>
      <img className={styles.avatar} src={url} alt={alt} />
    </>
  );
}

Avatar.propTypes = {};

export default Avatar;
