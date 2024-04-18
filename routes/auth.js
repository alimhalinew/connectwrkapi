const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const ErrorHandler = require("../middleware/ErrorHandler");
const validationRule = require("../middleware/Validation");

router.post("/login", AuthController.login);
router.post("/register", validationRule.registeration, AuthController.register);
router.use(ErrorHandler);

module.exports = router;
