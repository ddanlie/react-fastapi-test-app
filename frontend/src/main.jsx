import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import { Link } from "react-router-dom";


function Settings() {
  return (
    <>
      <h1>Settings</h1>
      <Link to="/">Go to Home</Link>
    </>
  );
}

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
