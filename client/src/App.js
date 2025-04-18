import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // Removed BrowserRouter import
import Menu from "./Menu";  // Assuming Menu.js is your main menu component
import Login from "./Login";  // Import the Login component
import Register from "./Register";  // Import the Register component
import logo from "./images/logo.png"; 
import { Box, CssBaseline, Typography, Button } from "@mui/material";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (i.e., if JWT token exists)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true); // User is logged in if token exists
    }
  }, []);

  // Handle login state change
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      style={{ backgroundColor: '#f1f1f1' }} // light gray background
    >
      <CssBaseline />
      
      {/* Header with the logo */}
      <Box
        display="flex"
        justifyContent="flex-start" // Align logo to the left
        alignItems="center"
        height="80px"
        backgroundColor="#e2e2e2" // background color of the top bar
        paddingLeft="20px" // Add some space from the left edge
      >
        <img
          src={logo}
          alt="QuickBite logo"
          style={{
            width: '100px', // Adjust the size of the logo
            height: 'auto',
          }}
        />
      </Box>

      {/* Conditional Rendering for Menu and Login/Signup Forms */}
      {isLoggedIn ? (
        <>
          <Menu />
          {/* Logout Button */}
          <Box textAlign="center" style={{ marginTop: '20px' }}>
            <Button 
              onClick={handleLogout} 
              variant="contained" 
              color="secondary"
              sx={{ backgroundColor: '#FF6F00', color: 'white', padding: '10px 20px' }}
            >
              Logout
            </Button>
          </Box>
        </>
      ) : (
        <Routes>
          {/* Define the routes for login and register */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}

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
