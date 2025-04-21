import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
 
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

router.post("/google-login", async (req, res) => {
    try {
        const { email, fullname, profilePic } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ fullname, email, profilePic, role: "student" });
        }

        res.status(200).json({ success: true, message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging in with Google" });
    }
});

 

export default router;

