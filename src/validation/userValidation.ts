import { RequestHandler } from "express";
import { userSchema } from "./userSchema";
import validator from "./validator";


export const signupValidation : RequestHandler = (req, res, next) => {
    validator(userSchema.signupUser, req.body, next)
}

export const loginValidation : RequestHandler = (req, res, next) => {
    validator(userSchema.loginUser, req.body, next)
}