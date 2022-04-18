import express from "express";
import { createDoctor } from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/register", createDoctor);

export default router;
