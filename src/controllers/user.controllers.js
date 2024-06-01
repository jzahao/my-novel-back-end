import * as userServices from "../services/user.services.js";

export const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password)
      return res.status(200).json({
        errCode: 1,
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
        errCode: 1,
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
