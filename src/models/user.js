export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      isNull: false,
      validate: {
        isEmail: {
          isUppercase: true,
          args: true,
          msg: "Invalid Email",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      defaultValue: "male",
    },
    password: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  });

  // Relations goes here

  return User;
};
