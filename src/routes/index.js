import express from "express";
import User from "./user.js";
import Doctor from "./doctor.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.use("/user", User);
router.use("/doctor", Doctor);

// catch all unknown routes
router.use(function (req, res, next) {
  res.status(404).send("404 not found");
});

export default router;
