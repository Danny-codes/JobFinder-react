import express  from "express";
import authController from "../controllers/authController.js";
const router = express.Router()

router.route('/auth').post(authController)

export default router