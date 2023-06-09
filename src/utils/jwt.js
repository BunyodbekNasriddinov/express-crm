import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

export default {
  sign: (payload) => jwt.sign(payload, SECRET_KEY),
  verify: (token) => jwt.verify(token, SECRET_KEY),
};
