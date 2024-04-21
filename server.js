const express = require("express");
require("dotenv").config();
const sequelize = require("./config/db");
const shareUpdateRoute = require("./routes/shareupdate");
const authRoutes = require("./routes/auth");
const routePrefix = "/api";

const app = express();
app.use(express.json());

app.use(routePrefix + "/share", shareUpdateRoute);
app.use(routePrefix + "/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/about", (req, res) => {
  res.send("about us page");
});

console.log("process -" + process.env.PORT);

const PORT = process.env.PORT || 3002;
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Unable to connect to the database:", err));
