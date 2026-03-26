const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ IMPORT ROUTES
const contactRoutes = require("./routes/contactRoutes");

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ CONNECT ROUTES (MOST IMPORTANT)
app.use("/api/contacts", contactRoutes);

// DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));