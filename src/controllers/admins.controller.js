import { BadRequestError, InternalServerError } from "../errors/errors.js";
import { adminLoginModel } from "../models/admin/admins.model.js";
import jwt from "../utils/jwt.js";

export const ADMIN_LOGIN = async (req, res, next) => {
  const admin = await adminLoginModel(req.body);

  try {
    if (!admin)
      return next(new BadRequestError("Invalid username or password"));

    const token = jwt.sign(admin.admin_id);
    admin.password = null;
    console.log(admin);

    res
      .status(200)
      .json({ status: 200, message: "successfully login", token, data: admin });
  } catch (error) {
    return next(new InternalServerError(error.message));
  }
};
