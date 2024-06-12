import db from "../models/index.js";
// import { Op, QueryTypes } from "sequelize";

export const getChaptersListSV = async (novelId) => {
  try {
    const chapters = await db.Chapter.findAll({
      where: { novel_id: novelId },
      attributes: ["id", "novel_id", "chapter_number", "chapter_name"],
    });
    if (chapters.length > 0)
      return {
        error: false,
        message: "Get chapters list succeed",
        data: chapters,
      };
    else return { error: true, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getChapterSV = async (novelId, chapterNumber) => {
  try {
    const chapter = await db.Chapter.findOne({
      where: { novel_id: novelId, chapter_number: chapterNumber },
    });
    if (chapter)
      return {
        error: false,
        message: "Get chapter succeed",
        data: chapter,
      };
    else return { error: true, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};
