import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const authController = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ where: { email: email } });
  if (foundUser) {
    const authenticated =  bcryptjs.compareSync(password, foundUser.password);

    if (authenticated) {
      const token = jwt.sign({ foundUser }, "secret", { expiresIn: "30d" });

      return res.json({ token: token, user: foundUser });
    } else {
        console.log(foundUser.password)
      res.json("Please provide valid email and password");
    }
  } else {
    res.json("Please provide valid email and password");
  }
};

export default authController;
