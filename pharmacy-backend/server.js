import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
app.use(cors({origin: "http://localhost:3000", credentials:true}))

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) =>{
    res.send("Pharmacy backend running...");
});

mongoose
.connect(process.env.MONGO_URI)
.then(() =>console.log("MongoDB connected"))
.catch((err) => console.log("MongoDV connection error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));













