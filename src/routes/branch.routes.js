import { Router } from "express";
import { ALL_BRANCH, NEW_BRANCH } from "../controllers/branch.controller.js";
import checkToken from "../middlewares/check-token.js";

const router = Router();

router.get("/branches", checkToken, ALL_BRANCH);
router.post("/branch/new", checkToken, NEW_BRANCH);

export default router;
