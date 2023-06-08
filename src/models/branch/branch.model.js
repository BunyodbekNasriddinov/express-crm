import { fetchAll } from "../setup.js";
import { allBranchQuery, createBrachQuery } from "./branch.query.js";

export const allBramchModel = async () => await fetchAll(allBranchQuery, []);

export const createBrachModel = async ({
  branch_name,
  branch_phone,
  branch_address,
}) => {
  return await fetchAll(createBrachQuery, [
    branch_name,
    branch_phone,
    branch_address,
  ]);
};
