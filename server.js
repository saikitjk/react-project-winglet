const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// mongoose

var MONGODB_URL =
  process.env.mongoDBConnectionURL || "mongodb://localgost/mongoHeadlines";

mongoose.connect(
  MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.");
  }
);

const PORT = process.env.PORT || 8080;

//set routes

app.use("/users", require("./routes/userRouter"));
////
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
