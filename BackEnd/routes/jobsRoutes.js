import express  from "express";
import jobsServices from "../controllers/jobsController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router()

router.route('/jobs').get(jobsServices.getJobs).post(authMiddleware, jobsServices.postJobs)
router.route('/jobs/selected/:id').get(jobsServices.getAJob).patch(authMiddleware, jobsServices.updateJob)
router.route('/jobs/selected/:id').delete(authMiddleware, jobsServices.deleteJob)
router.route('/jobs/filtered').post(jobsServices.getRequestedJobs)


export default router