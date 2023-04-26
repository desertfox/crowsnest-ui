import React from "react";
import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import Navbar from "./components/navbar.jsx";

import Dashboard from "./pages/dashboard.jsx";
import Jobs from "./pages/jobs.jsx";
import Job from "./pages/job.jsx";
import JobForm from "./pages/jobform.jsx";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  return (
    <Grid container xs={12}>
      <CssBaseline />
      <Routes>
        <Route element={<Navbar />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/job" element={<Jobs />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="/job/create" element={<JobForm />} />
        </Route>
      </Routes>
    </Grid>
  );
}
