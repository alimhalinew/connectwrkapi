const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const shareupdateController = require("../controllers/shareupdateController");

router.get(
  "/shareupdate",
  authMiddleware,
  shareupdateController.getAllshareupdate
);

module.exports = router;
