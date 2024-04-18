const { check, sanitizeBody } = require("express-validator");

// Registeration validation
exports.registeration = [
  // first Name validation
  check("firstName")
    .trim()
    .notEmpty()
    .withMessage("Name required")
    .matches(/^[a-zA-Z ]*$/)
    .withMessage("Only Characters with white space are allowed"),

  // Last Name validation
  check("lastName")
    .trim()
    .notEmpty()
    .withMessage("Name required")
    .matches(/^[a-zA-Z ]*$/)
    .withMessage("Only Characters with white space are allowed"),

  // email address validation
  check("useremail")
    .notEmpty()
    .withMessage("Email Address required")
    .normalizeEmail()
    .isEmail()
    .withMessage("must be a valid email"),

  // mobile validation
  // check("mobile").notEmpty().withMessage("Mobile number required"),

  // message validation
  // check("message").notEmpty().withMessage("Message  required"),

  // password validation
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 5 })
    .withMessage("password must be minimum 5 length")
    .matches(/(?=.*?[A-Z])/)
    .withMessage("At least one Uppercase")
    .matches(/(?=.*?[a-z])/)
    .withMessage("At least one Lowercase")
    .matches(/(?=.*?[0-9])/)
    .withMessage("At least one Number")
    .matches(/(?=.*?[#?!@$%^&*-])/)
    .withMessage("At least one special character")
    .not()
    .matches(/^$|\s+/)
    .withMessage("White space not allowed"),
];
