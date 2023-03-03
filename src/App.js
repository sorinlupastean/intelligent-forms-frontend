import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
