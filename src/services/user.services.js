import bcrypt from "bcryptjs";

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
      return { errCode: 1, message: "Wrong username" };
    } else {
      const user = await db.User.findOne({
        where: { username },
      });
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (!checkPassword) return { errCode: 1, message: "Wrong password" };
      else
        return {
          errCode: 0,
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
      return { errCode: 1, message: "This user is already exist" };
    } else {
      const hashPassword = await hashUserPassword(password);
      await db.User.create({
        username,
        password: hashPassword,
      });
      return { errCode: 0, message: "Register succeed" };
    }
  } catch (err) {
    console.log(err);
  }
};
