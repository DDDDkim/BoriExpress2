import { Router } from "express";
import * as boriController from "../controller/boripharms.js";
const router = Router();

router.get("/", boriController.main);
router.get("/login", boriController.loginBori);
router.get("/index", boriController.indexBori);

export default router;
