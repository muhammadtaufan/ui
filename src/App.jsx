import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "@/container/Login";
import LandingPage from "@/container/Landing";
import AboutPage from "@/container/About";
import RouteWrapper from "@/components/RouteWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*/home" element={<LandingPage />} />
        <Route path="*/about" element={<AboutPage />} />
        <Route path="*" element={<RouteWrapper />} />
        <Route path="*" element={<Navigate to="*/home" />} />
      </Routes>
    </>
  );
}

export default App;
