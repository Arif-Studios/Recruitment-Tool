import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import CreateJob from "./pages/CreateJob";
import HomePage from "./pages/HomePage";
import DetailJob from "./components/DetailJob";
import Profile from "./pages/Profile";
import JobApply from "./pages/JobApply";
import UserApplication from "./pages/UserApplication";
import AppJobDetail from "./pages/AppJobDetail";
import JobView from "./pages/JobView";
import JobApplicant from "./pages/JobApplicant";

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
          <Route path="/job/:id" element={<DetailJob />} />
          <Route path="/profile/:id" exact element={<Profile />} />
          <Route path="/apply/:id" exact element={<JobApply />} />
          <Route path="/myapplication" exact element={<UserApplication />} />
          <Route
            path="/myapplication/:appId/job/:jobid"
            exact
            element={<AppJobDetail />}
          />
          <Route path="/jobView" exact element={<JobView />} />
          <Route path="/job/application/:id" exact element={<JobApplicant />} />
        </Routes>
      </div>
    </div>
  );
}
