import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "@/container/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
