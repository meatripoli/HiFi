module.exports = function(sequelize, DataTypes) {
  const Album = sequelize.define("Album", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    record_label: DataTypes.STRING,
    new: DataTypes.BOOLEAN,
    used: DataTypes.BOOLEAN
    });

    Album.associate = function(models) {
      Album.belongsTo(models.Artist, {
        foreignKey: {
          allowNull: false
        }
      });
    Album.belongsTo(models.Store, { 
      through: Album ,
      foreignKey: {
        allowNull: false
      }
    });
    Album.hasMany(models.Review,{
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Album;
};