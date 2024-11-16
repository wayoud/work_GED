import React, { useState } from 'react';
import { Container, Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginTop: '100px',
  padding: '20px',
});

const StyledButton = styled(Button)({
  marginTop: '20px',
});

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton type="submit" variant="contained" color="primary" fullWidth>
              Login
            </StyledButton>
          </form>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Login;
