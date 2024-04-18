const jwt = require("jsonwebtoken");
const md5 = require("md5");
//const config = require('../config/config');
require("dotenv").config();
const User = require("../models/User");
const { where } = require("sequelize");

const { validationResult, matchedData } = require("express-validator");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== md5(password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Registeration

exports.register = async (req, res, next) => {
  const { firstName, lastName, dob, useremail, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    var errMsg = errors.mapped();
    return res
      .status(400)
      .json({ success: false, message: "Validation Error", error: errMsg });
  }

  //res.json({ email: email });

  try {
    const emailExists = await User.findOne({
      where: { email: useremail },
    });

    // check user is already exists
    if (emailExists) {
      res
        .status(400)
        .json({ success: false, message: "user email id already exists" });
    }

    // password

    const mpassword = md5(password);

    // create new user
    const newUser = await User.create({
      firstName,
      lastName,
      dob,
      email: useremail,
      password: mpassword,
    })
      .then(() => {
        res
          .status(201)
          .json({ success: true, message: "User registered successfully" });
      })
      .catch((err) => {
        //console.log(err);
        //res.status(400).send(err);
        next(err);
      });
    /*
    if (!newUser) {
      res.status(500).json({ error: error.message });
    }
    */
  } catch (error) {
    // res.status(500).json({ error: error.message });
    next(err);
  }

  //console.log(firstName);
};
