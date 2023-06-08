import { fetchAll } from "../setup.js";
import { adminLoginQuery } from "./admins.query.js";

export const adminLoginModel = async ({ username, password }) =>
  fetchAll(adminLoginQuery, [username, password]);
