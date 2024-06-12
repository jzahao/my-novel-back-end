import * as novelServices from "../services/novel.services.js";

export const getAllNovels = async (req, res) => {
  try {
    const _res = await novelServices.getAllNovelsSV();
    return res.status(200).json(_res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByLatestUpdate = async (req, res) => {
  try {
    const _res = await novelServices.getNovelsListByLatestUpdateSV();
    return res.status(200).json(_res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByView = async (req, res) => {
  try {
    const _res = await novelServices.getNovelsListByViewSV();
    return res.status(200).json(_res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByKeyword = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    if (!keyword)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.getNovelsListByKeywordSV(keyword);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByGenre = async (req, res) => {
  try {
    const genre = req.query.genre;
    if (!genre)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.getNovelsListByGenreSV(genre);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovel = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.getNovelSV(id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const countViewNovel = async (req, res) => {
  try {
    const id = req.body.id;
    const currentView = Number(req.body.currentView);
    if (!id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.countViewNovelSV(id, currentView);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelSources = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.getNovelSourcesSV(id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelGenres = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.getNovelGenresSV(id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getMinAndMaxChapter = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await novelServices.getMinAndMaxChapterSV(id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
