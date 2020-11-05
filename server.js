const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// mongoose

mongoose.connect(
  process.env.mongoDBConnectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("Diu! MongoDB connection established.");
  }
);

//set routes

app.use("/users", require("./routes/userRouter"));
