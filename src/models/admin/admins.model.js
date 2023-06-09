import { fetchOne } from "../setup.js";
import { adminLoginQuery } from "./admins.query.js";

export const adminLoginModel = async ({ username, password }) =>
  fetchOne(adminLoginQuery, [username, password]);
