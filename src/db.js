import mongoose from "mongoose";

const uri = "mongodb+srv://kylekariuki93_db_user:yocXhyZO8b9E03Yt@cluster0.xdrvtfx.mongodb.net/?appName=Cluster0"
; 

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));
