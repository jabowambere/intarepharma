import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import {verifyAdmin}from"../middleware/auth.js";

const router=express.Router();

// Handler shared by both protected and dev routes
const addPharmacistHandler = async (req, res) => {
    try {
        const { name, email, phone, password, licenseNumber } = req.body;
        // checking if they already exist
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Pharmacist already exists" });
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // create pharmacist
        const pharmacist = new User({
            name,
            email,
            phone,
            password: hashedPassword,
            licenseNumber,
            role: "pharmacist",
        });
        await pharmacist.save();
        res.status(201).json({ message: "Pharmacist added successfully" });
    } catch (error) {
        console.error(error);
        // If it's a mongoose validation error, return the message to help debugging
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: "Server error" });
    }
};

// In production keep the verifyAdmin middleware; in development allow calls without admin auth
if (process.env.NODE_ENV === 'production') {
    router.post("/add-pharmacist", verifyAdmin, addPharmacistHandler);
} else {
    router.post("/add-pharmacist", addPharmacistHandler);
}
router.get("/pharmacists", async(req, res)=>{
        try{
            const pharmacists = await User.find({role:"pharmacist"}).select("-password");
            res.status(200).json(pharmacists);
        }catch(error){
            console.error(error);
            res.status(500).json({message:"Server error"});
        }
    });
router.get("/users", async(req, res)=>{
    try{
        const users = await User.find().select("-password");
        res.status(200).json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
});
export default router;