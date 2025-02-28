const express = require("express");
const path = require("path");
const connectDB = require("./config/config");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// ✅ Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ Redirect root `/` to `AdminDashboard.html`
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/Pages/Dashboard/AdminDashboard.html"));
});

// ✅ Start Database & Server
connectDB(app, PORT);
