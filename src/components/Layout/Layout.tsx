import React from "react";
// import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

Layout.propTypes = {};

export default Layout;
