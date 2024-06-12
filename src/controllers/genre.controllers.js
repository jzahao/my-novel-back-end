import * as genreServices from "../services/genre.services.js";

export const getGenresList = async (req, res) => {
  try {
    const _res = await genreServices.getGenresListSV();
    return res.status(200).json(_res);
  } catch (err) {
    console.log(err);
    return err;
  }
};
