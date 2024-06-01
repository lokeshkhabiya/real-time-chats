import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getMessage, getUsersForSidebar, sendMessage } from "../controllers/message.controller";

const router = express.Router();

router.get("/conversation", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;