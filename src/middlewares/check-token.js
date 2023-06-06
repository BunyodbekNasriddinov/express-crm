import { AuthorizationError, InternalServerError } from "../errors/errors.js";
import jwt from "../utils/jwt.js";

export default (req, res, next) => {
  try {
    if (req.headers?.token)
      return next(new AuthorizationError("Token required"));

    if (jwt.verify(req.headers?.token)) {
      res.id = jwt.verify(req.headers?.token);
      next();
    }
  } catch (error) {
    next(new InternalServerError(error.message));
  }
};
