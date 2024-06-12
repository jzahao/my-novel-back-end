import bcrypt from "bcryptjs";
import { QueryTypes, where } from "sequelize";

import db from "../models/index.js";

const salt = bcrypt.genSaltSync(10);

const checkAccountIsExist = async (username) => {
  try {
    let user = await db.User.findOne({
      where: { username },
    });
    if (user) return true;
    else return false;
  } catch (err) {
    console.log(err);
  }
};

export const loginSV = async (username, password) => {
  try {
    const _checkAccountIsExist = await checkAccountIsExist(username);
    if (!_checkAccountIsExist) {
      return {
        error: true,
        message: "Login failed",
        errMessage: "Sai tên đăng nhập",
      };
    } else {
      const user = await db.User.findOne({
        where: { username },
      });
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (!checkPassword)
        return {
          error: true,
          message: "Login failed",
          errMessage: "Sai mật khẩu",
        };
      else
        return {
          error: false,
          message: "Login succeed",
          data: { ...user, password: null },
        };
    }
  } catch (err) {
    console.log(err);
  }
};

const hashUserPassword = (password) => {
  try {
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
  } catch (e) {
    return e;
  }
};

export const registerSV = async (username, password) => {
  try {
    const _checkAccountIsExist = await checkAccountIsExist(username);
    if (_checkAccountIsExist) {
      return {
        error: true,
        message: "Register failed",
        errMessage: "Tên đăng nhập đã tồn tại",
      };
    } else {
      const hashPassword = await hashUserPassword(password);
      const result = await db.User.create({
        username,
        password: hashPassword,
      });
      const dataValues = result.dataValues || {};
      if (dataValues)
        return {
          error: false,
          message: "Register succeed",
          data: { ...dataValues, password: null },
        };
      else return { error: true, message: "Register failed" };
    }
  } catch (err) {
    console.log(err);
  }
};

export const addFavoriteNovelSV = async (user_id, novel_id) => {
  try {
    const result = await db.FavoriteList.create({
      user_id,
      novel_id,
    });
    if (result)
      return {
        error: false,
        message: "Add favorite novel succeed",
        data: result,
      };
    else return { error: true, message: "Add favorite novel failed" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const deleteFavoriteNovelSV = async (user_id, novel_id) => {
  try {
    const result = await db.FavoriteList.destroy({
      where: {
        user_id,
        novel_id,
      },
    });
    if (result)
      return {
        error: false,
        message: "Delete favorite novel succeed",
        data: result,
      };
    else return { error: true, message: "Delete favorite novel failed" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getFavoriteListSV = async (user_id) => {
  try {
    const list = await db.sequelize.query(
      `select nv.id, nv.name, nv.author, nv.url_pic, nv.view
      from favoritelists fl, novels nv
      where fl.user_id = ? and fl.novel_id = nv.id`,
      { replacements: [user_id], type: QueryTypes.SELECT }
    );
    if (list.length > 0)
      return {
        error: false,
        message: "Get favorite list succeed",
        data: list,
      };
    else return { error: true, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getReadingHistorySV = async (user_id, novel_id) => {
  try {
    const result = await db.ReadingHistory.findOne({
      where: { user_id, novel_id },
    });
    if (result)
      return {
        error: false,
        message: "Get reading history succeed",
        data: result,
      };
    else return { error: true, message: "No data" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addReadingHistorySV = async (user_id, novel_id, chapter) => {
  try {
    const result = await db.ReadingHistory.create({
      user_id,
      novel_id,
      chapter,
    });
    if (result)
      return {
        error: false,
        message: "Add reading history succeed",
        data: result,
      };
    else return { error: true, message: "Add reading history failed" };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const updateReadingHistorySV = async (user_id, novel_id, chapter) => {
  try {
    const result = await db.ReadingHistory.update(
      { chapter },
      { where: { user_id, novel_id } }
    );
    if (result)
      return {
        error: false,
        message: "Update reading history succeed",
        data: result,
      };
    else return { error: true, message: "Update reading history failed" };
  } catch (err) {
    console.log(err);
    return err;
  }
};
