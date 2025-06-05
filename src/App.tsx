import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CareersLandingPage from './pages/CareersLandingPage';
import JobSpecPage from './pages/JobSpecPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CareersLandingPage />} />
      <Route path="/job-spec" element={<JobSpecPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
