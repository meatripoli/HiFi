module.exports = function(sequelize, DataTypes) {
  const Album = sequelize.define("Album", {
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Genre: DataTypes.STRING,
    Subgenre: DataTypes.STRING
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