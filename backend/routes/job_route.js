import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import isRecruiter from "../middlewares/isRecruiter.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job_controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,isRecruiter, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,isRecruiter, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
