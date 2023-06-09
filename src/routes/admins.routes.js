import { Router } from "express";
import { ADMIN_LOGIN } from "../controllers/admins.controller.js";

const router = Router();


router.post('/admin/login', ADMIN_LOGIN);

export default router;