import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import CreateJob from "./pages/CreateJob";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="">
      <Navbar />

      <div className="px-10">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createJob" element={<CreateJob />} />
        </Routes>
      </div>
    </div>
  );
}
