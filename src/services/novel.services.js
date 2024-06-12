import db from "../models/index.js";
import { Op, QueryTypes, where } from "sequelize";

export const getAllNovelsSV = async () => {
  try {
    const novels = await db.Novel.findAll({
      attributes: ["id", "name", "author", "url_pic", "view"],
    });
    if (novels.length > 0)
      return { error: 0, message: "Get all novels succeed", data: novels };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByLatestUpdateSV = async () => {
  try {
    const novels = await db.sequelize.query(
      `select nv.id, nv.author, nv.name, nv.url_pic, nv.view
      from novels nv, (select novel_id, max(updatedAt) as updatedAt from chapters group by novel_id order by updatedAt desc, novel_id desc) as ct
      where nv.id = ct.novel_id
      order by ct.updatedAt desc, nv.id desc`,
      { type: QueryTypes.SELECT }
    );
    if (novels.length > 0)
      return {
        error: 0,
        message: "Get novels list by latest update succeed",
        data: novels,
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByViewSV = async () => {
  try {
    const novels = await db.Novel.findAll({
      order: [
        ["view", "DESC"],
        ["id", "DESC"],
      ],
      attributes: ["id", "name", "author", "url_pic", "view"],
    });
    if (novels.length > 0)
      return {
        error: 0,
        message: "Get novels list by view succeed",
        data: novels,
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByKeywordSV = async (keyword) => {
  try {
    const novels = await db.Novel.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.substring]: keyword } },
          { author: { [Op.substring]: keyword } },
        ],
      },
      attributes: ["id", "name", "author", "url_pic", "view"],
    });
    if (novels.length > 0)
      return {
        error: 0,
        message: "Get novels list by name succeed",
        data: novels,
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelsListByGenreSV = async (genre) => {
  try {
    const novels = await db.sequelize.query(
      `select novels.id, novels.author, novels.name, novels.url_pic, novels.view
      from novels, novelgenres
      where novelgenres.genre = ? and novels.id = novelgenres.novel_id`,
      { replacements: [genre], type: QueryTypes.SELECT }
    );
    if (novels.length > 0)
      return {
        error: 0,
        message: "Get novels list by genre succeed",
        data: novels,
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelSV = async (id) => {
  try {
    const novel = await db.Novel.findByPk(id);
    if (novel) return { error: 0, message: "Get novel succeed", data: novel };
    else return { error: 1, message: "This novel is not exist" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const countViewNovelSV = async (id, currentView) => {
  try {
    const result = await db.Novel.update(
      { view: currentView + 1 },
      { where: { id } }
    );
    // console.log(result[0]);
    if (result[0])
      return { error: false, message: "Increase novel's view succeed" };
    else return { error: true, message: "No rows has been updated" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelSourcesSV = async (id) => {
  try {
    const sources = await db.sequelize.query(
      `select distinct ct.get_from
      from novels nv, chapters ct
      where nv.id = ct.novel_id and nv.id = ?`,
      { replacements: [id], type: QueryTypes.SELECT }
    );
    if (sources.length > 0)
      return {
        error: 0,
        message: "Get novel's sources succeed",
        data: sources,
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getNovelGenresSV = async (id) => {
  try {
    const genres = await db.NovelGenre.findAll({
      where: { novel_id: id },
      attributes: ["genre"],
    });
    if (genres.length > 0)
      return {
        error: 0,
        message: "Get novel's genres succeed",
        data: genres,
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getMinAndMaxChapterSV = async (id) => {
  try {
    const result = await db.sequelize.query(
      `select min(chapter_number) as min, max(chapter_number) as max
      from chapters
      where novel_id = ?`,
      { replacements: [id], type: QueryTypes.SELECT }
    );
    if (result[0].min && result[0].max)
      return {
        error: 0,
        message: "Get novel's min and max chapter succeed",
        data: result[0],
      };
    else return { error: 1, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};
