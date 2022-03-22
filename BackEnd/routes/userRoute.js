import express from "express";
import userServices from "../controllers/userController.js";

const router = express.Router();

router.route("/user").post(userServices.createUser);
router
  .route("/user/:id")
  .get(userServices.getAUser)
  .patch(userServices.updateUser)
  .patch(userServices.changePassword)
  .delete(userServices.deleteUser);

  export default router
