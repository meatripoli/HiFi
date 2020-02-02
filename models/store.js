module.exports = function(sequelize, DataTypes) {
  
  const Store = sequelize.define("store", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address1: DataTypes.CHAR(50),
    Address2: DataTypes.CHAR(20),
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Zip_code: {
        type: DataTypes.INTEGER,
        len: [5],
    },
    Phone: {
      type: DataTypes.STRING
    },
    Hour_open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [2],
    },
    Hour_close: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [2],
    },
    });

  // Store.associate = function(models) {

  // };
  return Store;
};
