import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, CardContent, Typography, Button, Grid, TextField, AppBar, Toolbar, Select, MenuItem } from "@mui/material";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    _id: null,  // added _id to differentiate between new and existing items
  });

  // Fetch menu items
  useEffect(() => {
    axios
      .get("http://localhost:8000/menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the menu!", error);
      });
  }, []);

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // Handle form submission to add or update a menu item
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem._id) {
      // If there's an _id, update the existing item
      axios
        .put(`http://localhost:8000/menu/${newItem._id}`, newItem)
        .then((response) => {
          const updatedItems = menuItems.map((item) =>
            item._id === newItem._id ? response.data : item
          );
          setMenuItems(updatedItems);
          resetForm();
        })
        .catch((error) => {
          console.error("There was an error updating the menu item!", error);
        });
    } else {
      // Otherwise, create a new item
      axios
        .post("http://localhost:8000/menu", newItem)
        .then((response) => {
          setMenuItems([...menuItems, response.data]);
          resetForm();
        })
        .catch((error) => {
          console.error("There was an error adding the menu item!", error);
        });
    }
  };

  // Handle editing a menu item
  const handleEdit = (id) => {
    const itemToEdit = menuItems.find(item => item._id === id);
    if (itemToEdit) {
      setNewItem({
        ...itemToEdit,
      });
    }
  };

  // Handle deleting a menu item
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/menu/${id}`)
      .then(() => {
        setMenuItems(menuItems.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the menu item!", error);
      });
  };

  // Reset form after submission
  const resetForm = () => {
    setNewItem({
      name: "",
      description: "",
      price: "",
      category: "",
      _id: null,  // Reset the _id after submission
    });
  };

  return (
    <div>
      {/* AppBar Header with branding */}
      <AppBar position="static" style={{ backgroundColor: "#004c97", padding: '10px 0' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: "bold", fontSize: '24px' }}>
            <span style={{ color: "#e2e2e2" }}>QuickBite - Fresh Flavors, Fast Delivered.</span>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h3" gutterBottom align="center" style={{ fontWeight: '700', color: '#FF6F00' }}>
          Menu
        </Typography>

        {/* Add/Update Menu Item Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <Grid container justifyContent="center" spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={newItem.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                name="description"
                value={newItem.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                name="price"
                value={newItem.price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                label="Category"
                fullWidth
                name="category"
                value={newItem.category}
                onChange={handleChange}
                required
              >
                <MenuItem value="Main">Main</MenuItem>
                <MenuItem value="Salads">Salads</MenuItem>
                <MenuItem value="Appetizers">Appetizers</MenuItem>
                <MenuItem value="Pasta">Pasta</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Drinks">Drinks</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#FF6F00", // Orange branding
                  color: "white",
                  padding: "10px 20px", // Bigger button for easier clicks
                  borderRadius: "8px",
                  fontSize: "16px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Adding a shadow to the button
                  '&:hover': {
                    backgroundColor: '#e64a19', // Darker orange on hover
                    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {newItem._id ? 'Update Item' : 'Add Item'}
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Display Menu Items */}
        <Grid container spacing={3}>
          {menuItems.length === 0 ? (
            <Typography variant="h5" color="textSecondary" align="center" sx={{ width: "100%" }}>
              No menu items available.
            </Typography>
          ) : (
            menuItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    "&:hover": { boxShadow: 6 },
                    borderRadius: "12px", // Rounded corners
                    margin: "10px", // Adding spacing between the cards
                    padding: "20px", // Padding inside the cards for a cleaner look
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" style={{ fontWeight: "bold", color: "#FF6F00" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                      Price: ${item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                      Category: {item.category}
                    </Typography>
                    {/* Add buttons for editing and deleting */}
                    <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 2 }}>
                      <Grid item>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleEdit(item._id)}
                          sx={{
                            fontSize: '12px',
                            padding: '6px 12px',
                            textTransform: 'none',
                          }}
                        >
                          Edit
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(item._id)}
                          sx={{
                            fontSize: '12px',
                            padding: '6px 12px',
                            textTransform: 'none',
                          }}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Menu;
