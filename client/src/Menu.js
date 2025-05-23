import React, { useEffect, useState } from "react";
import axios from "axios";
import {Container,Card,CardContent,Typography,Button,Grid,TextField,Select,MenuItem,} from "@mui/material";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    _id: null,
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/menu")
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem._id) {
      axios
        .put(`http://localhost:4000/api/menu/${newItem._id}`, newItem)
        .then((response) => {
          const updatedItems = menuItems.map((item) =>
            item._id === newItem._id ? response.data : item
          );
          setMenuItems(updatedItems);
          resetForm();
        })
        .catch((error) => console.error("Error updating item:", error));
    } else {
      axios
        .post("http://localhost:4000/api/menu", newItem)
        .then((response) => {
          setMenuItems([...menuItems, response.data]);
          resetForm();
        })
        .catch((error) => console.error("Error adding item:", error));
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = menuItems.find((item) => item._id === id);
    if (itemToEdit) setNewItem(itemToEdit);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/menu/${id}`)
      .then(() => setMenuItems(menuItems.filter((item) => item._id !== id)))
      .catch((error) => console.error("Error deleting item:", error));
  };

  const resetForm = () => {
    setNewItem({
      name: "",
      description: "",
      price: "",
      category: "",
      _id: null,
    });
  };

  return (
    <Container style={{ marginTop: "32px", padding: "16px" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ fontWeight: 700, color: "#FF6F00" }}
      >
        Menu
      </Typography>

      {/* Add Item Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              variant="outlined"
              value={newItem.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              required
              variant="outlined"
              value={newItem.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              name="price"
              fullWidth
              required
              variant="outlined"
              value={newItem.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              name="category"
              fullWidth
              required
              displayEmpty
              value={newItem.category}
              onChange={handleChange}
            >
              <MenuItem disabled value="">
                Select Category
              </MenuItem>
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
              style={{
                backgroundColor: "#FF6F00",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
              }}
            >
              {newItem._id ? "Update Item" : "Add Item"}
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Menu Items Grid */}
      <Grid container spacing={3} justifyContent="center">
        {menuItems.length === 0 ? (
          <Typography
            variant="h6"
            align="center"
            style={{ width: "100%", marginTop: "32px" }}
          >
            No menu items available.
          </Typography>
        ) : (
          menuItems.map((item) => (
            <Grid item key={item._id}>
              <Card
                style={{
                  height: "250px", // Fixed height
                  width: "400px", // Fixed width
                  display: "flex", // Use flexbox to manage layout
                  flexDirection: "column", // Stack children vertically
                  borderRadius: "12px",
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent
                  style={{
                    flex: "1 1 auto", // Allow CardContent to grow but not overflow
                    padding: "16px",
                    overflow: "hidden", // Prevent content from overflowing
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      color: "#FF6F00",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h7"
                    style={{
                      marginTop: "8px",
                      color: "#666",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2, // Limit to 2 lines
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ marginTop: "8px", color: "#1976d2" }}
                  >
                    Price: ${item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginTop: "8px", color: "#666" }}
                  >
                    Category: {item.category}
                  </Typography>
                </CardContent>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  style={{
                    padding: "0 16px 16px 16px", // Match CardContent padding
                    flex: "0 0 auto", // Prevent buttons from stretching
                  }}
                >
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(item._id)}
                      style={{
                        fontSize: "12px",
                        padding: "6px 12px",
                        textTransform: "none",
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
                      style={{
                        fontSize: "12px",
                        padding: "6px 12px",
                        textTransform: "none",
                      }}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Menu;