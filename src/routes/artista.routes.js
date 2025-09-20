import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/artistas.controller.js";
const router = Router();

router.get("/artistas", getUsers)

router.get("/artistas/:id", getUser)

router.post("/artistas", createUser)

router.put("/artistas/:id", updateUser)

router.delete("/artistas/:id", deleteUser)

export default router;