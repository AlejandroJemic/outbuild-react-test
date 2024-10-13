import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadinPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';


const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  console.log('rendering');
  return sessionStorage.getItem('isLogged') ? children : <Navigate to="/login" />
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoadinPage />} />
        <Route path="/login" element={<LoadinPage />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
