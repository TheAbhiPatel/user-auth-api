import { NextFunction } from "express";
import createHttpError from "http-errors";
import Joi from "joi";
import { userSchema } from "./userSchema";

const validator = async (schemaName:Joi.ObjectSchema,body:object, next:NextFunction)=> {

  const value = await schemaName.validate(body, {abortEarly:false});
  
  try {
    value.error ? next(createHttpError(422, value.error)) : next();
    
  } catch (error) {
    console.log(error);
    
  }
  
} 

export default validator;

