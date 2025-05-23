import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import logo from "./images/logo.png";
import Navbar from './Navbar';
import { Box, CssBaseline, Typography } from "@mui/material";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <CssBaseline />

      {/* Header Logo */}
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        height="70px"
        backgroundColor="#e2e2e2"
        paddingLeft="20px"
      >
        <img
          src={logo}
          alt="QuickBite logo"
          style={{
            width: '100px',
            height: 'auto',
          }}
        />
      </Box>

      {/* Navigation */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* Routing */}
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            {/* Add future pages like /feedback here */}
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>

      {/* Footer */}
      <footer
        style={{
          marginTop: 'auto',
          padding: '20px',
          backgroundColor: '#f1f1f1',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2025 QuickBite. All rights reserved.
        </Typography>
      </footer>
    </Box>
  );
}

export default App;
