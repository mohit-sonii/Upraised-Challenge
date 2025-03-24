

import { Router } from "express";
import { generateToken } from "../controllers/tokenGeneration.controller";

const router  = Router()

router.route("/").get(generateToken)

export default router