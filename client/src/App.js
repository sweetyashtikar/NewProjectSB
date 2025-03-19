
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from './Admin/Admin.jsx';
import UserDashboard from './User/UserDashboard.jsx';

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/admin">Admin Panel</Link> | 
        <Link to="/user">User View</Link>
      </nav>
      
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </div>
  </Router>
);

export default App;
