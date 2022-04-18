export default (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
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
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  });

  // Relations goes here

  return Doctor;
};
