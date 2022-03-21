import express  from "express";
import jobsServices from "../controllers/jobsController.js";
const router = express.Router()

router.route('/jobs').get(jobsServices.getJobs).post(jobsServices.postJobs)
router.route('/jobs/:id').get(jobsServices.getAJob).patch(jobsServices.updateJob)
router.route('/jobs/:id').delete(jobsServices.deleteJob)

export default router