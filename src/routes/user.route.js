import express from "express";
import { errorHandler } from "../middlewares/index.js";
import { UserController } from "../controllers/index.js";

const router = new express.Router();
router.post("", errorHandler(UserController.create));
router.get("", errorHandler(UserController.getAll));
router.get("/:id", errorHandler(UserController.getById));
router.put("/:id", errorHandler(UserController.update));
router.delete("/:id", errorHandler(UserController.deleteUser));

export const UserRoutes = router;