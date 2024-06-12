import * as userServices from "../services/user.services.js";

export const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await userServices.loginSV(username, password);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const register = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await userServices.registerSV(username, password);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addFavoriteNovel = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const novel_id = req.body.novel_id;
    if (!user_id || !novel_id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await userServices.addFavoriteNovelSV(user_id, novel_id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const deleteFavoriteNovel = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const novel_id = req.body.novel_id;
    if (!user_id || !novel_id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await userServices.deleteFavoriteNovelSV(user_id, novel_id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getFavoriteList = async (req, res) => {
  try {
    const user_id = req.query.user_id;
    if (!user_id)
      return res.status(200).json({
        error: true,
        message: "Missing required parameters",
      });
    else {
      const _res = await userServices.getFavoriteListSV(user_id);
      return res.status(200).json(_res);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
