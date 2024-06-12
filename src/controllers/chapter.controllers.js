import * as chapterServices from "../services/chapter.services.js";

export const getChaptersList = async (req, res) => {
  try {
    const novelId = req.query.novelId;
    if (!novelId)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await chapterServices.getChaptersListSV(novelId);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getChapter = async (req, res) => {
  try {
    const novelId = req.query.novelId;
    const chapterNumber = req.query.chapterNumber;
    if (!novelId || !chapterNumber)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await chapterServices.getChapterSV(novelId, chapterNumber);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
