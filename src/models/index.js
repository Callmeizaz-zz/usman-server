import { Sequelize } from "sequelize";
import { config } from "../configs/db.config.js";
import doctor from "./doctor.js";
import user from "./user.js";

const { DB, HOST, PASSWORD, USER } = config;

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: "postgres",
  define: {
    underscored: true,
  },
});

const models = {
  User: user(sequelize, Sequelize.DataTypes),
  Doctor: doctor(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
