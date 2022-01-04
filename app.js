require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/routes");


app.use(express.json());

app.use("/api", router);
// const port = process.env.PORT || 4000;


app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on PORT :", process.env.APP_PORT);
});