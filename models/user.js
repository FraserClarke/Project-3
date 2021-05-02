module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        len: [1],
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        len: [1],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        len: [8],
      },
    },
  });
  return User;
};
