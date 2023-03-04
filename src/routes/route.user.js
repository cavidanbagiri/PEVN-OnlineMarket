const express = require("express");
const router = express.Router();

const UserController = require("../controllers/controller.user");
const validateMiddleware = require("../middleware/validate");
const user_schema = require("../validators/validation.user");

router.post(
  "/register",
  validateMiddleware(user_schema),
  UserController.registerUser
);

router.post("/login",UserController.loginUser);

router.post("/addcomment", UserController.addComment);

module.exports = router;
