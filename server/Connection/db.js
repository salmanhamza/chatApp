const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", false);

dotenv.config();

const url = process.env.DB;

mongoose.connect(url, () => {
  console.log("db is connected");
});
