import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';
import FeedbackModal from './FeedbackModal'; // make sure path is correct

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
        paddingY={1}
        bgcolor="#e2e2e2"
      >
        <Box fontWeight="bold" fontSize="1.2rem">
          {/* Logo placeholder if needed */}
        </Box>

        <Stack direction="row" spacing={2}>
          <Button variant="text" onClick={() => navigate('/')}>Home</Button>
          <Button variant="text" onClick={() => setFeedbackOpen(true)}>Feedback</Button>
          {isLoggedIn ? (
            <>
              <Button variant="text" onClick={() => navigate('/menu')}>Admin</Button>
              <Button variant="outlined" color="error" onClick={onLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="text" onClick={() => navigate('/login')}>Login</Button>
              <Button variant="text" onClick={() => navigate('/register')}>Register</Button>
            </>
          )}
        </Stack>
      </Box>

      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
};

export default Navbar;
