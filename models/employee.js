module.exports = function(sequelize, DataTypes) {
  
  const Employee = sequelize.define("Employee", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address1: DataTypes.CHAR(50),
    address2: DataTypes.CHAR(20),
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.INTEGER(5),
    fav_album: DataTypes.STRING,
    });

  Employee.associate = function(models) {
    // User model association
    // Employee.belongsTo(models.User, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
    // User.hasOne(models.Employee);

    // Store model association
    // Employee.belongsTo(models.Store);
    // Store.hasMany(models.Employee);
  };
  return Employee;
};
