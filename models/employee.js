module.exports = function(sequelize, DataTypes) {
  
  const Employee = sequelize.define("employee", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    fav_album: DataTypes.STRING,
    });

    // Stock.associate = function (models) {
    //   models.album.belongsToMany(models.store, { through: models.stock })
    //   models.store.belongsToMany(models.album, { through: models.stock });
    // };
  
  Employee.associate = function(models) {
    // User model association
    Employee.belongsTo(models.user, {
      foreignKey: {
        allowNull: true
      }
    });
    Employee.belongsTo(models.store, {
      foreignKey: {
        allowNull: true
      }
    });
    models.user.hasOne(models.employee, {
      foreignKey: {
        allowNull: true
      }
    });
    // User.hasOne(models.Employee);

    // Store model association
    // Employee.belongsTo(models.Store);
    // Store.hasMany(models.Employee);
  };
  return Employee;
};
