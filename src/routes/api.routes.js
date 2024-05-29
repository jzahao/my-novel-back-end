import express from "express";
import { login } from "../services/user.services.js";

const router = express.Router();

const apiRoutes = (version, app) => {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router.post("/api/login", login);

  return app.use(version, router);
};

export default apiRoutes;
