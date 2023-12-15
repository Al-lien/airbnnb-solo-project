require("dotenv").config();

const express = require("express");
const parentsRoutes = require("./routes/parents");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/parents", parentsRoutes);

// listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
