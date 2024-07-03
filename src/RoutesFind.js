import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';


export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </Router>
  );
};
