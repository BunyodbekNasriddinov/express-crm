import { Router } from "express";

// swagger import
import swaggerRoute from "../utils/swagger.js";

import adminRoutes from "../routes/admins.routes.js";

const router = Router();

router.use(adminRoutes);

router.use(swaggerRoute);

export default router;
