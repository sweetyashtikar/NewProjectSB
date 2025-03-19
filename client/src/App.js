
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from './Admin/Admin.jsx';
import User from './User/User.jsx';

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/admin">Admin Panel</Link> | 
        <Link to="/user">User View</Link>
      </nav>
      
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  </Router>
);

export default App;
