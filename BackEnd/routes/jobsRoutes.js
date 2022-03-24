import express  from "express";
import jobsServices from "../controllers/jobsController.js";
const router = express.Router()

router.route('/jobs').get(jobsServices.getJobs).post(jobsServices.postJobs)
router.route('/jobs/selected/:id').get(jobsServices.getAJob).patch(jobsServices.updateJob)
router.route('/jobs/selected/:id').delete(jobsServices.deleteJob)
router.route('/jobs/filtered').post(jobsServices.getRequestedJobs)

export default router