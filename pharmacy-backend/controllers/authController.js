import User from "../models/User.js";
import jwt from "jsonwebtoken";
//registering
export const registerUser=async (req, res)=>{
    try{
        const{name, email, password, role}=req.body;
        //checking if the user already exists
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        //create new user
        const user= new User({name, email, password, role});
        await user.save();

        res.status(201).json({message:"user registered successfully!"});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
};
//Login user
export const loginUser=async (req, res)=>{
    try{
        const{email, password}=req.body;
        //find user by email
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Email or Password not correct!"});
        }
        //checking passwords
        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Email or Password not correct!"});
        }
        //generate JWT token
        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        res.status(200).json({
            message:"Login successful",
            token,
            user:{id:user._id, name:user.name, email:user.email, role:user.role},
        });
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
};