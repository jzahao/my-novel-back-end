import db from "../models/index.js";

export const login = async (req, res) => {
  try {
    let user = await db.User.findAll();
    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
