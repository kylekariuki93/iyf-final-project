import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/User.js";
import cors from "cors";

const app = express();
const PORT = 5000;
const JWT_SECRET = "kariuki_brains_lowkey"; 

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const uri = "mongodb+srv://kylekariuki93_db_user:yocXhyZO8b9E03Yt@cluster0.xdrvtfx.mongodb.net/?appName=Cluster0"
;
mongoose.connect(uri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

// Routes

// Sign Up
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Sign In
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
