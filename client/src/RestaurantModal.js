import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RestaurantModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
  });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      setError(null);
      setSuccess(null);

      const response = await axios.post("/api/restaurants", formData);

      if (response.status === 201 || response.status === 200) {
        setSuccess("Restaurant created successfully!");
        setFormData({ name: "", location: "", category: "" });

        // Redirect to /menu
        navigate("/menu");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create restaurant.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Set Up Your Restaurant</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
          <TextField
            name="name"
            label="Restaurant Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="location"
            label="Location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="category"
            label="Category (e.g., Café, Pizza, Fast Food)"
            value={formData.category}
            onChange={handleChange}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="warning">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RestaurantModal;
