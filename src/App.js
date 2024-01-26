import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login.js";
import { ApplicationViews } from "./views/ApplicationViews.js";
import { Authorized } from "./views/Authorized.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};

export default App;
