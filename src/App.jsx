import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="">
      <Navbar />

      <div className="px-10">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}
