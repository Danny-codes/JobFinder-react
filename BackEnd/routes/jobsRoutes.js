import express  from "express";
import jobsServices from "../controllers/jobsController.js";
const router = express.Router()

router.route('/jobs').get(jobsServices.getJobs)

export default router