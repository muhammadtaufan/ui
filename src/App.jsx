import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "@/container/Login";
import RouteWrapper from "@/components/RouteWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="admin/*" element={<RouteWrapper />} />
        <Route path="admin" element={<Navigate to="/dashboard" />} />
        <Route path="admin/login" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="admin/dashboard" />} />
      </Routes>
    </>
  );
}

export default App;
