import bcrypt from "bcrypt";
import { formatErrors, isEmpty } from "../utils/helperFunctions.js";

import models from "../models/index.js";

export const createDoctor = async (req, res) => {
  const body = req.body;
  const { email, password, name } = body;
  const isEmptyKeys = isEmpty(body);

  if (isEmptyKeys) {
    return res.status(400).send("Every fields are required");
  }
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);

  await models.Doctor.create({
    email: email,
    password: hash,
    name,
  })
    .then((user) => {
      if (user) {
        res.status(200).send({
          message: "Doctor created successfully",
        });
      }
    })
    .catch((error) => {
      res.status(400).send({
        message: formatErrors(error),
      });
    });
};
