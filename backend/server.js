require("dotenv").config();

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

// routes
const parentsRoutes = require("./routes/parents");
const childrenRoutes = require("./routes/children");
const nurseriesRoutes = require("./routes/nurseries");
const disponibilitiesRoutes = require("./routes/disponibilities");

const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/parents", parentsRoutes);
app.use("/api/children", childrenRoutes);
app.use("/api/nurseries", nurseriesRoutes);
app.use("/api/disponibilities", disponibilitiesRoutes);

app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(
        "connecting to mongodb & listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
