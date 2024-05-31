import express from "express";
import * as userControllers from "../controllers/user.controllers.js";

const router = express.Router();

const apiRoutes = (version, app) => {
  router.post("/api/login", userControllers.login);
  router.post("/api/register", userControllers.register);

  return app.use(version, router);
};

export default apiRoutes;
