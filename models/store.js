module.exports = function(sequelize, DataTypes) {
  
  const Store = sequelize.define("Store", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address1: DataTypes.CHAR(50),
    address2: DataTypes.CHAR(20),
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: {
        type: DataTypes.INTEGER,
        len: [5],
    },
    phone: {
      type: DataTypes.INTEGER,
      len: [10]
    },
    hour_open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [2],
    },
    hour_close: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [2],
    },
    });

  // Store.associate = function(models) {

  // };
  return Store;
};
