import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company_controller.js";
import isRecruiter from "../middlewares/isRecruiter.js";
import {singleUpload} from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,isRecruiter,registerCompany);
router.route("/get").get(isAuthenticated,isRecruiter,getCompany);
router.route("/get/:id").get(isAuthenticated,isRecruiter,getCompanyById);
router.route("/update/:id").put(isAuthenticated,isRecruiter,singleUpload, updateCompany);

export default router;
