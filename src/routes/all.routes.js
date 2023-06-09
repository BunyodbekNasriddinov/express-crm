import { Router } from "express";

// swagger import
import swaggerRoute from "../utils/swagger.js";

// routes import
import adminRoutes from "../routes/admins.routes.js";
import branchesRoutes from '../routes/branch.routes.js'

const router = Router();

router.use(adminRoutes);
router.use(branchesRoutes)

router.use(swaggerRoute);

export default router;
