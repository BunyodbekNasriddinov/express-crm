import { Router } from "express";

// swagger import
import swaggerRoute from "../utils/swagger.js";

const router = Router();

router.use(swaggerRoute);

export default router;
