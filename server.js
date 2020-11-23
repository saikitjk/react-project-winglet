const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.REACT_APP_mongoDBConnectionURL}`,
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

// mongoose

// mongoose.connect(
//   process.env.REACT_APP_mongoDBConnectionURL,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//   (err) => {
//     if (err) throw err;
//     console.log("MongoDB connection established.");
//   }
// );

//set routes

app.use("/users", require("./routes/userRouter"));
////
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
