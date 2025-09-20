import { Router } from "express";
import{ createObra, deleteObra, getObra, getObras, updateObra } from "../controller/obras.controller.js";
const router = Router();

router.get("/obras", getObras)

router.get("/obras/:id", getObra )

router.post("/obras", createObra)

router.put("/obras/:id", updateObra)

router.delete("/obras/:id", deleteObra)

export default router;