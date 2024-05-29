import express from "express";
import "dotenv/config";

import connection from "./src/config/connectDB.configs.js";
import apiRoutes from "./src/routes/api.routes.js";

const app = express();
const port = process.env.PORT || 8081;

// Solve cors problem
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Config req.body - can get data from html (client)
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// Router
apiRoutes("/", app);

// Connect DB
connection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
