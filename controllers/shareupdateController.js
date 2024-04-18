const shareupdate = require("../models/shareupdateModel");

exports.getAllshareupdate = async (req, res) => {
  try {
    const shareup = await shareupdate.findAll();
    res.json(shareup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
