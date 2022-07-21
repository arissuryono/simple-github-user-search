import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import "./App.css";
import NotFound from "pages/NotFound/NotFound";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
