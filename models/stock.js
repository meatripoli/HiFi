module.exports = function(sequelize, DataTypes) {
  const Stock = sequelize.define("Stock", {
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    });

    Stock.associate = function(models) {
      Stock.belongsTo(models.Store, {
        foreignKey: {
          allowNull: false
        }
      })
      Stock.hasMany(models.Album,{
        foreignKey: {
          allowNull: false
        }
      });
    };
  return Stock;
};