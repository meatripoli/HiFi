module.exports = function (sequelize, DataTypes) {
  const Stock = sequelize.define("stock", {
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Stock.associate = function (models) {
    models.album.belongsToMany(models.store, { through: models.stock })
    models.store.belongsToMany(models.album, { through: models.stock });
  };
  return Stock;
};