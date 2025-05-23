import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", credentials)
      .then((response) => {
        console.log("Response from server: ", response);  // Added log to check response
        localStorage.setItem("authToken", response.data.token); // Store JWT token
        onLogin(); // Notify the parent component (e.g., App.js) that the user is logged in
      })
      .catch((err) => {
        console.error(err);  // Log error for better debugging
        setError("Invalid credentials. Please try again.");
      });
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Login
      </Typography>

      {/* Login Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px", backgroundColor: "#FF6F00", color: "white" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Error Message */}
      {error && <Typography color="error" align="center">{error}</Typography>}
    </Container>
  );
};

export default Login;
