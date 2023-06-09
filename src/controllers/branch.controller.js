import {
  allBramchModel,
  createBrachModel,
} from "../models/branch/branch.model.js";
import { queryFilter } from "../utils/model.js";

export const ALL_BRANCH = async (req, res, next) => {
  let branches = await allBramchModel();

  branches = queryFilter(req.query, branches);

  res.status(200).json({ status: 200, message: "ok", data: branches });
};

export const NEW_BRANCH = async (req, res, next) => {
  // const { branch_name, branch_phone, branch_address } = req.body;

  const newBranch = await createBrachModel(req.body);
};
