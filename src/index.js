import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import App from "./JS/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./JS/Profile";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path=":Id" element={<App />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
