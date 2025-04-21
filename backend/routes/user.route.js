import express from "express";
import { login, logout, register, updateProfile, googleLogin } from "../controllers/user.controller.js"; // ✅ Import googleLogin
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);
router.route("/google-login").post(googleLogin); // ✅ Now this will work

export default router;
