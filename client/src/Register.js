import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      .post("http://localhost:4000/api/auth/register", credentials)
      .then((response) => {
        console.log(response);
        localStorage.setItem("authToken", response.data.token); // Store token
        navigate("/login"); // Redirect to login page after successful registration
      })
      .catch((err) => {
        console.error("Registration error:", err.response || err.message || err);
        setError("Error registering user. Please try again.");
      });
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Register
      </Typography>

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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      {error && <Typography color="error" align="center">{error}</Typography>}
    </Container>
  );
};

export default Register;
