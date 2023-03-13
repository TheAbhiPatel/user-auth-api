import Joi from "joi";

export const userSchema = {
    signupUser : Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(6).required(),
    }),
    loginUser: Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required()
    })
}