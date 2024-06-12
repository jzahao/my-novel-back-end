import express from "express";
import * as userControllers from "../controllers/user.controllers.js";
import * as novelControllers from "../controllers/novel.controllers.js";
import * as genreControllers from "../controllers/genre.controllers.js";
import * as chapterControllers from "../controllers/chapter.controllers.js";

const router = express.Router();

const apiRoutes = (version, app) => {
  router.post("/api/login", userControllers.login);
  router.post("/api/register", userControllers.register);
  router.post("/api/add-favorite-novel", userControllers.addFavoriteNovel);
  router.delete(
    "/api/delete-favorite-novel",
    userControllers.deleteFavoriteNovel
  );
  router.get("/api/get-favorite-list", userControllers.getFavoriteList);

  router.get("/api/get-all-novels", novelControllers.getAllNovels);
  router.get(
    "/api/get-novels-list-by-latest-update",
    novelControllers.getNovelsListByLatestUpdate
  );
  router.get(
    "/api/get-novels-list-by-view",
    novelControllers.getNovelsListByView
  );
  router.get(
    "/api/get-novels-list-by-keyword",
    novelControllers.getNovelsListByKeyword
  );
  router.get(
    "/api/get-novels-list-by-genre",
    novelControllers.getNovelsListByGenre
  );
  router.get("/api/get-novel", novelControllers.getNovel);
  router.put("/api/count-view-novel", novelControllers.countViewNovel);
  router.get("/api/get-novel-sources", novelControllers.getNovelSources);
  router.get("/api/get-novel-genres", novelControllers.getNovelGenres);
  router.get(
    "/api/get-min-and-max-chapter",
    novelControllers.getMinAndMaxChapter
  );

  router.get("/api/get-chapters-list", chapterControllers.getChaptersList);
  router.get("/api/get-chapter", chapterControllers.getChapter);

  router.get("/api/get-genres-list", genreControllers.getGenresList);

  return app.use(version, router);
};

export default apiRoutes;
