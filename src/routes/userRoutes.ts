import express from "express";
import Joi from "joi";
import { getUser, loginUser, signupUser } from "../controllers/userController";
import { loginValidation, signupValidation } from "../validation/userValidation";

const router = express.Router();



router.get("/", getUser);
router.post("/signup",signupValidation, signupUser);
router.post("/login",loginValidation, loginUser);










router.get("*", (req, res) => {
  res.json({ message: "Router not found" });
});

export default router;
