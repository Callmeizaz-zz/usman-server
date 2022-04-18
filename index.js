import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import models from "./src/models/index.js";
import router from "./src/routes/index.js";

const app = express();

// routes middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(router);
// middleware
app.use(cors);

const PORT = 3008;

models.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });
});
