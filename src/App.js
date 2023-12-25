import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginPage';
import BlogCreate from './components/BlogCreate';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blogCreate" element={<BlogCreate />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
