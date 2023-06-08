import {
  allBramchModel,
  createBrachModel,
} from "../models/branch/branch.model.js";

export const ALL_BRANCH = async (req, res, next) => {
  const branches = await allBramchModel();
  console.log(branches);
};

export const NEW_BRANCH = async (req, res, next) => {
  // const { branch_name, branch_phone, branch_address } = req.body;

  const newBranch = await createBrachModel(req.body);
};
