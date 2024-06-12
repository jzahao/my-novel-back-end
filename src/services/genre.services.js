import db from "../models/index.js";
// import { QueryTypes, where } from "sequelize";

export const getGenresListSV = async () => {
  try {
    // const genres = await db.sequelize.query(
    //   `select genres.*
    //   from (select distinct genre from novelgenres) as genres`,
    //   { type: QueryTypes.SELECT }
    // );
    const genres = await db.NovelGenre.findAll({
      attributes: ["genre"],
      group: ["genre"],
    });
    if (genres.length > 0)
      return { error: false, message: "Get genres list succeed", data: genres };
    else return { error: true, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};
