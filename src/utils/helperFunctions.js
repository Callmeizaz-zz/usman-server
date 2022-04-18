import _ from "lodash";

export const isEmpty = (obj) => {
  return Object.keys(obj).some((key) => obj[key] === "" || !obj[key]);
};

export const formatErrors = (err, models) => {
  if (err.name === "SequelizeUniqueConstraintError") {
    return err.errors.map((x) => _.pick(x, ["path", "message"]));
  }
  return [{ path: "users", message: "Something went wrong" }];
};
