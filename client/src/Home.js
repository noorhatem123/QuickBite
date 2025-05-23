import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Avatar,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import QrCodeIcon from "@mui/icons-material/QrCode";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import RestaurantModal from "./RestaurantModal"; // 👈 import the modal
import noorImg from "./images/noor.jpg";
import aliImg from "./images/ali.jpg";
import karimImg from "./images/karim.jpg";

const features = [
  { title: "Digital Menu", icon: <RestaurantIcon />, color: "#FF7043" },
  { title: "QR Ordering", icon: <QrCodeIcon />, color: "#42A5F5" },
  { title: "Live Tracking", icon: <TrendingUpIcon />, color: "#66BB6A" },
  { title: "Customer Feedback", icon: <FeedbackIcon />, color: "#AB47BC" },
  { title: "Sales Insights", icon: <BarChartIcon />, color: "#26C6DA" },
];

const founders = [
  { name: "Noor Hatem", role: "Founder & CEO", img: noorImg },
  { name: "Ali Sherif", role: "Co-founder & COO", img: aliImg },
  { name: "Karim Hatem", role: "Co-founder & CMO", img: karimImg },
];

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false); // 👈 modal state
  
const navigate = useNavigate();
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(to right, #fff8f0, #fff0e1)",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", color: "#FF6F00", mb: 2 }}
          >
            Welcome to QuickBite
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Digital ordering made effortless for restaurants and customers.
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Button
              variant="contained"
              color="warning"
              size="large"
              onClick={() => setModalOpen(true)} // 👈 open modal
            >
              Get Started
            </Button>
            <Button
  variant="outlined"
  color="warning"
  size="large"
  onClick={() => navigate("/menu")}
>
  Try Demo
</Button>
          </Stack>
        </Container>
      </Box>

      {/* Features */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            What You Can Do with QuickBite
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: feature.color,
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6">{feature.title}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 6 }}>
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {["Create Menu", "Generate QR", "Receive Orders", "Track Sales"].map(
              (label, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      textAlign: "center",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="warning.main"
                      sx={{ fontWeight: "bold" }}
                    >
                      {idx + 1}
                    </Typography>
                    <Typography>{label}</Typography>
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>

      {/* Why QuickBite */}
      <Box sx={{ py: 10, backgroundColor: "#f7f7f7" }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
            Why QuickBite?
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                🔥 Boost Efficiency
              </Typography>
              <Typography>
                Eliminate order errors and streamline operations with our smart ordering system.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                🚀 Go Contactless
              </Typography>
              <Typography>
                Empower customers with contact-free menu browsing and ordering from their own phones.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                📊 Real-Time Insights
              </Typography>
              <Typography>
                Monitor sales and feedback to make smarter business decisions on the fly.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                alt="why quickbite"
                style={{ width: "100%", maxWidth: 400, display: "block", margin: "auto" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 6 }}>
            What Our Users Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { name: "Sarah A.", quote: "QuickBite transformed our dine-in experience." },
              { name: "Mohamed R.", quote: "Fast setup and intuitive features!" },
              { name: "Lina B.", quote: "Our customers love the QR menus!" },
            ].map((t, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card sx={{ p: 4, borderRadius: 3, textAlign: "center", position: "relative" }}>
                  <FormatQuoteIcon
                    sx={{ fontSize: 40, color: "grey.300", position: "absolute", top: 8, left: 16 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", color: "text.secondary", mb: 2 }}
                  >
                    "{t.quote}"
                  </Typography>
                  <Typography variant="subtitle2">— {t.name}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Founders */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 6 }}>
            Meet Our Founders
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {founders.map((founder, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ p: 3, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
                  <Avatar
                    alt={founder.name}
                    src={founder.img}
                    sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h6">{founder.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {founder.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(to right, #ffe0b2, #ffcc80)",
        }}
      >
        <Container>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Ready to elevate your restaurant's ordering experience?
          </Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ px: 4, py: 1.5 }}
            onClick={() => setModalOpen(true)} // 👈 open modal from bottom CTA
          >
            GET STARTED TODAY
          </Button>
        </Container>
      </Box>

      {/* Restaurant Setup Modal */}
      <RestaurantModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default Home;
