// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ onLogout }) => (
  <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Admin Panel
      </Typography>
      <Button color="inherit" onClick={onLogout}>
        Logout
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
