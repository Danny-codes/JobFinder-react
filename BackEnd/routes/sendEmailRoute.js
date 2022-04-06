import express from "express";
import sendMessage from "../controllers/SendEmailControllher.js";

const router = express.Router();

router.route("/email").post(sendMessage);

  export default router
