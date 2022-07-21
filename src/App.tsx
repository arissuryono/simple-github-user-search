import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "components/Layout/Layout";

import Dashboard from "pages/Dashboard/Dashboard";
import NotFound from "pages/NotFound/NotFound";
import Profile from "pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="/profile/:userName/readm" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
