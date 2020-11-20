const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// mongoose

mongoose.connect(
  process.env.REACT_APP_mongoDBConnectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.");
  }
);

//set routes

app.use("/users", require("./routes/userRouter"));
