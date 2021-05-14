// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcrypt");
// Creating our User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        len: [1],
      },
    },
    // firstName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   Validate: {
    //     len: [1],
    //   },
    // },
    // lastName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   Validate: {
    //     len: [1],
    //   },
    // },
    // phoneNumber: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   Validate: {
    //     len: [1],
    //   },
    // },
    // address: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   Validate: {
    //     len: [1],
    //   },
    // },
    // ownersTrade: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   Validate: {
    //     len: [1],
    //   },
    // },

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
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
