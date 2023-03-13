import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import InternalServerError from "http-errors";
import createHttpError from "http-errors";
import Joi from "joi";

import User from "../models/userModel";

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (error) {
    return next(InternalServerError);
  }
};



export const signupUser: RequestHandler = async (req, res, next) => {

  
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;

  try {
    const isUserPresent = await User.findOne({ email });
    if (isUserPresent)
      return next(createHttpError(406, "user already exitsts"));
    const hashPassword = await bcrypt.hash(password, 8);
    const user = new User({ name, email, password: hashPassword });

    await user.save();

    res.status(201).json({ message: "user registerd successfully" });
  } catch (error) {
    // res.send(error)
    return next(InternalServerError);
  }
};

export const loginUser: RequestHandler = async(req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({email})
    if(!user) return next(createHttpError(406, "invalid email"));
    const passwordMatch = await bcrypt.compare(password, user.password)
    console.log(passwordMatch);
    
    if(!passwordMatch) return next(createHttpError(401, "invalid password"))

    res.status(200).json({message:'user login succefull'})


  } catch (error) {
    return next(InternalServerError);
  }
};






export const newfunc: RequestHandler = async(req, res, next) => {
  try {
  } catch (error) {
    return next(InternalServerError);
  }
};
