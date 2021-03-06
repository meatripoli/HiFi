// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.prototype.validPassword = function(password) {
    if (password === this.password) {
      return true;
    }};

  return User;
};
