// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import Login from './pages/Login';
import PdfReader from './pages/PdfReader';
import PdfTable from './pages/PdfTable';
import Header from './components/Header';
import SideNav from './components/SideNav';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Box display="flex" flexDirection="column" height="100vh">
        <Header onLogout={handleLogout} />
        <Grid container>
          <Grid item xs={2}>
            <SideNav style={{ marginTop:'10%' }}/>
          </Grid>
          <Grid item xs={10} style={{ padding: '20px'}}>
            <Routes>
              <Route path="/pdf-reader" element={<PdfReader />} />
              <Route path="/pdf-table" element={<PdfTable />} />
              <Route path="*" element={<Navigate to="/pdf-reader" replace />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
};

export default App;
